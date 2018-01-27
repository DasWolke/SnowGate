let router = require('express').Router();
const utils = require('../utils');
// create guild
router.post('/guilds', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'createGuild', res, req.body);
});
// Get guild by id
router.get('/guilds/:id', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'getGuild', res, req.params.id);
});
// Modify guild
router.patch('/guilds/:id', async (req,res) => {
    return utils.wrapRequest(req.rest, 'guild', 'updateGuild', res, req.params.id, req.body);
});
// Delete guild
router.delete('/guilds/:id', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'leaveGuild', res, req.params.id);
});
// Get guild channels
router.get('/guilds/:id/channels', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'getGuildChannels', res);
});
// Create guild channel
router.post('/guilds/:id/channels', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'createGuildChannel', res, req.params.id, req.body);
});
// Modify guild channel positions
router.patch('/guilds/:id/channels', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'updateChannelPositions', res, req.params.id, req.body);
});
// Get guild member
router.get('/guilds/:id/members/:user_id', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'getGuildMember', res, req.params.id, req.params.user_id);
});
// List guild members
router.get('/guilds/:id/members', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'getGuildMembers', res, req.params.id, req.query);
});
// Add guild member
router.put('/guilds/:id/members/:user_id', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'addGuildMember', res, req.params.id, req.params.user_id, req.body);
});
// Modify guild member
router.patch('/guilds/:id/members/:user_id', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'updateGuildMember', res, req.params.id, req.params.user_id, req.body);
});
// Modify current users nick
router.patch('/guilds/:id/members/@me/nick', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'updateSelf', res, req.params.id, req.body);
});
// Add guild member role
router.put('/guilds/:id/members/:user_id/roles/:role_id', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'addGuildMemberRole', res, req.params.id, req.params.id, req.params.user_id, req.params.role_id);
});
// Remove guild member role
router.delete('/guilds/:id/members/:user_id/roles/:role_id', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'removeGuildMemberRole', res, req.params.id, req.params.id, req.params.user_id, req.params.role_id);
});
router.delete('/guilds/:id/members/:user_id', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'removeGuildMember', res, req.params.id, req.params.id, req.params.user_id, req.body);
});

// Get guild bans
router.get('/guilds/:id/bans', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'getGuildBans', res, req.params.id);
});
// Create guild ban
router.put('/guilds/:id/bans/:user_id', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'createGuildBan', res, req.params.id, req.params.user_id, req.body);
});
// Remove guild ban
router.delete('/guilds/:id/bans/:user_id', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'removeGuildBan', res, req.params.id, req.params.user_id, req.body);
});


// Get guild roles
router.get('/guilds/:id/roles', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'getGuildRoles', res, req.params.id);
});
// Create guild role
router.put('/guilds/:id/roles', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'createGuildRole', res, req.params.id, req.body);
});
// Modify guild role positions
router.patch('/guilds/:id/roles', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'updateRolePositions', res, req.params.id, req.body);
});
// Modify guild role
router.patch('/guilds/:id/roles/:role_id', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'updateGuildRole', res, req.params.id, req.params.role_id, req.body);
});
// Remove guild role
router.delete('/guilds/:id/roles/:role_id', async (req, res) => {
	return utils.wrapRequest(req.rest, 'guild', 'removeGuildRole', res, req.params.id, req.params.role_id, req.body);
});

// Get guild prune count
router.get('/guilds/:id/prune', async (req, res) => {
    return utils.wrapRequest(req.rest, 'guild', 'getPruneCount', res, req.params.id, req.query);
});

