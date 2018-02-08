const router = require('express').Router()
const utils = require('../utils')
// Get gateway
router.get('/gateway', (req, res) => {
  return utils.wrapRequest(req.rest, 'bot', 'getGateway', res, req.params.inviteId)
})
// Get bot gateway
router.delete('/gateway/bot', (req, res) => {
  return utils.wrapRequest(req.rest, 'bot', 'getBotGateway', res, req.params.inviteId)
})
module.exports = router
