const http = require('http')
const { SnowTransfer, Constants } = require('snowtransfer')
const { requestBody } = require('./utils')
const config = require('./config.json')
const Client = new SnowTransfer(config.token, config.options || {})
const apiVerRegex = /^\/api\/v\d+/
const contentTypeSplitter = /; */
const FormData = require('form-data')
const formParser = require('parse-multipart-data')

const server = http.createServer(async (req, res) => {
  /** @type {URL} */
  const url = new URL(req.url || '', `http://${req.headers.host}`)
  let endpoint = url.pathname.replace(apiVerRegex, '')
  try {
    /** @type {Parameters<import("snowtransfer").SnowTransfer["requestHandler"]["request"]>["1"]} */
    // @ts-ignore I know that it is valid. Shut up!!!
    const method = req.method?.toLowerCase() ?? 'get'
    const dataType = req.headers['content-type']?.includes('multipart') ? 'multipart' : 'json'
    let data
    if (dataType === 'json') {
      if (method !== 'get') {
        const body = await requestBody(req, 5000).then(d => d.toString()).catch(() => '')
        if (body.length && (body[0] === '{' || body[0] === '[')) data = JSON.parse(body)
        else data = body.length ? body : undefined
      }
    } else {
      const body = await requestBody(req)
      const form = formParser.parse(body, ((req.headers['content-type'] || '').split(contentTypeSplitter).find(i => i.startsWith('boundary=')) || '').slice('boundary='.length))
      const includesFiles = form.find(i => i.filename?.startsWith('files'))
      let newForm
      if (includesFiles) {
        const payloadJSON = form.find(i => i.name === 'payload_json')
        const files = form.filter(i => i.name !== 'payload_json').map((i, ind) => ({ name: i.filename || `file ${ind}`, file: i.data }))
        const newPayload = payloadJSON ? JSON.parse(payloadJSON.data.toString('latin1')) : {}
        if (files.length) newPayload.files = files
        newForm = Constants.standardMultipartHandler(newPayload)
      } else {
        newForm = new FormData()
        let ind = 0
        for (const input of form) {
          if (input.name !== 'payload_json') newForm.append(input.name || `file ${ind++}`, input.data)
        }
      }
      data = newForm
    }
    if (method === 'get' && data && url.search.length) endpoint += url.search

    /** @type {string | undefined} */
    // @ts-ignore
    const reason = req.headers['x-audit-log-reason']

    const result = await Client.requestHandler.request(endpoint, method, dataType, !data && method === 'get' ? Object.fromEntries(url.searchParams.entries()) : data, reason ? { 'X-Audit-Log-Reason': reason } : undefined)
    res.writeHead(result ? 200 : 204, { 'Content-Type': 'application/json' }).end(result ? JSON.stringify(result) : undefined)
  } catch (e) {
    const status = e.httpStatus ?? 500
    const response = {}
    if (e.message) response.message = e.message
    if (e.code) response.code = e.code

    res.writeHead(status, { 'Content-Type': 'application/json' }).end(JSON.stringify(response))
  }

  console.log(`${res.statusCode || '000'} ${req.method?.toUpperCase() || 'UNK'} ${endpoint} --- ${req.socket.remoteAddress}`)
  if (!req.destroyed) req.destroy()
  if (!res.destroyed) res.destroy()
})

const port = config.port || 4096
const host = config.host || '127.0.0.1'

server.once('listening', () => console.log(`Server listening on ${host}:${port}`))
server.listen(port, host)
