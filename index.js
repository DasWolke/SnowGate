const express = require('express')
const multer = require('multer')
const { SnowTransfer } = require('snowtransfer')
const { handleReason, handleMultipart } = require('./utils')
const config = require('./config.json')
const app = express()
const Client = new SnowTransfer(config.token, config.options || {})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(multer({ storage: multer.memoryStorage() }).any())
app.use(handleReason)

async function proxyAllRequests (req, res) {
  try {
    const endpoint = req.path.replace('/api/v9', '')
    const method = req.method
    const dataType = req.get('content-type')?.includes('multipart') ? 'multipart' : 'json'
    const data = dataType === 'json' ? (Object.keys(req.query)[0] ? req.query : req.body) : handleMultipart(req)

    const result = await Client.requestHandler.request(endpoint, method, dataType, data)
    return res.status(200).json(result)
  } catch (e) {
    const status = e.response ? e.response.status : 500
    const response = { status, error: e.toString() }
    if (e.response) Object.assign(response, e.response.data)

    return res.status(status).json(response)
  }
}

app.all('*', proxyAllRequests)
app.listen(config.port || 4096)
