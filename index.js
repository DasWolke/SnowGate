const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const SnowTransfer = require('snowtransfer')
const config = require('./config/config.json')
const snowtransfer = new SnowTransfer(config.token, config.options)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next) => {
  req.rest = snowtransfer
  if (req.headers['X-Audit-Log-Reason']) {
    if (req.method === 'GET' || req.path.includes('/bans') || req.path.includes('/prune')) {
      req.query.reason = req.headers['X-Audit-Log-Reason']
    } else {
      req.body.reason = req.headers['X-Audit-Log-Reason']
    }
  }
  next()
})
app.use('/api/v7', require('./routes/bots'))
app.use('/api/v7', require('./routes/channels'))
app.use('/api/v7', require('./routes/emojis'))
app.use('/api/v7', require('./routes/guilds'))
app.use('/api/v7', require('./routes/invites'))
app.use('/api/v7', require('./routes/users'))
app.use('/api/v7', require('./routes/voice'))
app.use('/api/v7', require('./routes/webhook'))
app.listen(config.port, config.host)
console.log(`App started on ${config.host}:${config.port}`)
