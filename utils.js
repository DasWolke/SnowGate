/**
 * @param {import("http").IncomingMessage} req
 * @param {number} [timeout]
 * @returns {Promise<Buffer>}
 */
function requestBody (req, timeout = 10000) {
  if (!req.headers['content-length']) return Promise.resolve(Buffer.allocUnsafe(0))
  const sizeToMeet = Number(req.headers['content-length'])
  return new Promise((resolve, reject) => {
    /** @type {NodeJS.Timeout | null} */
    let timer = null
    let totalSize = 0
    /** @type {Array<Buffer>} */
    const chunks = []
    /** @param {Buffer} chunk */
    function onData (chunk) {
      totalSize += chunk.byteLength
      if (totalSize > sizeToMeet) {
        req.removeListener('data', onData)
        req.removeListener('end', onEnd)
        return reject(new Error('BYTE_SIZE_DOES_NOT_MATCH_LENGTH'))
      }
      chunks.push(chunk)
    }
    function onEnd () {
      if (timer) clearTimeout(timer)
      req.removeListener('data', onData)
      resolve(Buffer.concat(chunks))
    }
    req.on('data', onData)
    req.once('end', onEnd)
    timer = setTimeout(() => {
      req.removeListener('data', onData)
      req.removeListener('end', onEnd)
      reject(new Error('TIMEOUT_WAITING_FOR_BODY_REACHED'))
    }, timeout)
  })
}

module.exports = { requestBody }
