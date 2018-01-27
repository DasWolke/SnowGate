let router = require('express').Router();
const utils = require('../utils');
// Get invite
router.get('/invites/:inviteId', (req, res) => {
    return utils.wrapRequest(req.rest, 'invites', 'getInvite', res, req.params.inviteId);
});
// Delete invite
router.delete('/invites/:inviteId', (req, res) => {
    return utils.wrapRequest(req.rest, 'invites', 'deleteInvite', res, req.params.inviteId);
});
module.exports = router;