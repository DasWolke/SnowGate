let router = require('express').Router();
const utils = require('../utils');
// Get User via ID/Get Current User
router.get('/users/:id', async (req, res) => {
    return utils.wrapRequest(req.rest, 'user', 'getUser', res, req.params.id);
});
// Modify Current User
router.patch('/users/@me', async (req,res) => {
    return utils.wrapRequest(req.rest, 'user', 'updateSelf', res, req.body);
});
// Get User Guilds
router.get('/users/@me/guilds', async (req, res) => {
    return utils.wrapRequest(req.rest, 'user', 'getGuilds', res);
});
// Leave Guild
router.delete('/users/@me/guilds/:guild_id', async (req, res) => {
    return utils.wrapRequest(req.rest, 'user', 'leaveGuild', res, req.params.guild_id);
});
// Get User DMs
router.get('/users/@me/channels', async (req, res) => {
    return utils.wrapRequest(req.rest, 'user', 'getDirectMessages', res);
});
// Create DM Channel
router.post('/users/@me/channels', async (req, res) => {
    return utils.wrapRequest(req.rest, 'user', 'createDirectMessageChannel', res, req.body);
});

