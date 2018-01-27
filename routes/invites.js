let router = require('express').Router();
const utils = require('../utils');
// Get invite
router.get('/invites/:inviteId', (req, res) => {
    return utils.wrapRequest(req.rest, 'invite', 'getInvite', res, req.params.inviteId);
});
// Delete invite
router.delete('/invites/:inviteId', (req, res) => {
    return utils.wrapRequest(req.rest, 'invite', 'deleteInvite', res, req.params.inviteId);
});
module.exports = router;