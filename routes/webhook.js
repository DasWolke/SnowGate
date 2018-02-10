const router = require('express').Router()
const utils = require('../utils')
// Get Channel Webhooks
router.get('/channels/:id/webhooks', async (req, res) => {
  req.rest.webhook.deleteWebhook()
  return utils.wrapRequest(req.rest, 'webhook', 'getWebhooksChannel', res, req.params.id)
})
// Create Webhook
router.post('/channels/:id/webhooks', async (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'createWebhook', res, req.params.id, req.body)
})
// Get Guild Webhooks
router.get('/guilds/:id/webhooks', async (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'getWebhooksGuild', res, req.params.id)
})
// Get Webhook by id
router.get('/webhooks/:id', async (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'getWebhook', res, req.params.id)
})
// Update Webhook
router.patch('/webhooks/:id', async (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'updateWebhook', res, req.params.id, null, req.body)
})
// Delete Webhook
router.delete('/webhooks/:id', async (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'deleteWebhook', res, req.params.id)
})
// Get Webhook by id with token
router.get('/webhooks/:id/:token', async (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'getWebhook', res, req.params.id, req.params.token)
})
// Update Webhook with token
router.patch('/webhooks/:id/:token', async (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'updateWebhook', res, req.params.id, req.params.token, req.body)
})
// Delete Webhook with token
router.delete('/webhooks/:id/:token', async (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'deleteWebhook', res, req.params.id, req.params.token)
})
// Execute Webhook
router.post('/webhooks/:id/:token', async (req, res) => {
  return utils.wrapRequest(req.rest, 'webhook', 'executeWebhook', res, req.params.id, req.params.token, req.body)
})
module.exports = router
