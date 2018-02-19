const router = require('express').Router()
const utils = require('../utils')
// Create Webhook
router.post('/channels/:id/webhooks', async (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'createWebhook', res, req.params.id, req.body)
})
// Get Channel Webhooks
router.get('/channels/:id/webhooks', (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'getWebhooksChannel', res, req.params.id)
})
// Get Guild Webhooks
router.get('/guilds/:id/webhooks', (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'getWebhooksGuild', res, req.params.id)
})
// Get Webhook
router.get('/webhooks/:id', (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'getWebhook', res, req.params.id)
})
// Get Webhook with Token
router.get('/webhooks/:id/:token', (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'getWebhook', res, req.params.id, req.params.token)
})
// Modify Webhook
router.patch('/webhooks/:id', (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'updateWebhook', res, req.params.id, req.body.token, req.body)
})
// Delete Webhook
router.delete('/webooks/:id', (req, res) => {
  return utils.wrapRequest(res.rest, 'webhook', 'deleteWebhook', res, req.params.id, req.body && req.body.token)
})
module.exports = router
