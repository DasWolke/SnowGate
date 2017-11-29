let router = require('express').Router();
const utils = require('../utils');
// Create Webhook
router.post('/channels/:id/webhooks', async (req, res) => {
    return utils.wrapRequest(req.rest, 'webhook', 'createWebhook', res, req.params.id, req.body);
});