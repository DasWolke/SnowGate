function handleReason (req, res, next) {
  const reason = req.get('x-audit-log-reason')
  if (reason) {
    if (req.method === 'GET' || req.path.includes('/bans') || req.path.includes('/prune')) {
      req.query.reason = reason
    } else {
      req.body.reason = reason
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
