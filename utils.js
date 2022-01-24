function handleReason (req, res, next) {
  if (req.headers['x-audit-log-reason']) {
    if (req.method === 'GET' || req.path.includes('/bans') || req.path.includes('/prune')) {
      req.query.reason = req.headers['x-audit-log-reason']
    } else {
      req.body.reason = req.headers['x-audit-log-reason']
    }
  }
  next()
}

function handleMultipart (req) {
  const body = JSON.parse(req.body.payload_json)
  req.files.forEach((f, i) => {
    body.files[i].file = f.buffer
    body.files[i].name = f.originalname
  })
  return body
}

module.exports = { handleReason, handleMultipart }
