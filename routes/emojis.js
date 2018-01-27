let router = require('express').Router();
const utils = require('../utils');
// Get list of emojis
router.get('/guild/:id/emojis', (req, res) => {
    return utils.wrapRequest(req.rest, 'emoji', 'getEmojis', res, req.params.id);
});
// Get emoji
router.get('/guild/:id/emojis/:emoji_id', (req, res) => {
    return utils.wrapRequest(req.rest, 'emoji', 'getEmoji', res, req.params.id, req.params.emoji_id);
});
// Create emoji
router.post('/guild/:id/emojis', (req, res) => {
    return utils.wrapRequest(req.rest, 'emoji', 'createEmoji', res, req.params.id, req.body);
});
// Update emoji
router.patch('/guild/:id/emojis/:emoji_id', (req, res) => {
    return utils.wrapRequest(req.rest, 'emoji', 'updateEmoji', res, req.params.id, req.params.emoji_id, req.body);
});
// Delete emoji
router.delete('/guild/:id/emojis/:emoji_id', (req, res) => {
    return utils.wrapRequest(req.rest, 'emoji', 'deleteInvite', res, req.params.id, req.params.emoji_id);
});
module.exports = router;