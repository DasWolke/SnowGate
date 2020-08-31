const router = require('express').Router()
const utils = require('../utils')
// create guild
router.post('/guilds', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'createGuild', res, req.body)
})
// Get guild by id
router.get('/guilds/:id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuild', res, req.params.id)
})
// Update guild
router.patch('/guilds/:id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'updateGuild', res, req.params.id, req.body)
})
// Delete guild
router.delete('/guilds/:id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'leaveGuild', res, req.params.id)
})
// Get guild channels
router.get('/guilds/:id/channels', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuildChannels', res, req.params.id)
})
// Create guild channel
router.post('/guilds/:id/channels', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'createGuildChannel', res, req.params.id, req.body)
})
// Update guild channel positions
router.patch('/guilds/:id/channels', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'updateChannelPositions', res, req.params.id, req.body)
})
// Get guild member
router.get('/guilds/:id/members/:user_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuildMember', res, req.params.id, req.params.user_id)
})
// List guild members
router.get('/guilds/:id/members', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuildMembers', res, req.params.id, req.query)
})
// Add guild member
router.put('/guilds/:id/members/:user_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'addGuildMember', res, req.params.id, req.params.user_id, req.body)
})
// Update guild member
router.patch('/guilds/:id/members/:user_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'updateGuildMember', res, req.params.id, req.params.user_id, req.body)
})
// Update current users nick
router.patch('/guilds/:id/members/@me/nick', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'updateSelf', res, req.params.id, req.body)
})
// Add guild member role
router.put('/guilds/:id/members/:user_id/roles/:role_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'addGuildMemberRole', res, req.params.id, req.params.user_id, req.params.role_id)
})
// Remove guild member role
router.delete('/guilds/:id/members/:user_id/roles/:role_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'removeGuildMemberRole', res, req.params.id, req.params.user_id, req.params.role_id)
})
router.delete('/guilds/:id/members/:user_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'removeGuildMember', res, req.params.id, req.params.user_id)
})

// Get guild bans
router.get('/guilds/:id/bans', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuildBans', res, req.params.id)
})
// Create guild ban
router.put('/guilds/:id/bans/:user_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'createGuildBan', res, req.params.id, req.params.user_id, req.query)
})
// Remove guild ban
router.delete('/guilds/:id/bans/:user_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'removeGuildBan', res, req.params.id, req.params.user_id)
})

// Get guild roles
router.get('/guilds/:id/roles', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuildRoles', res, req.params.id)
})
// Create guild role
router.put('/guilds/:id/roles', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'createGuildRole', res, req.params.id, req.body)
})
// Update guild role positions
router.patch('/guilds/:id/roles', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'updateRolePositions', res, req.params.id, req.body)
})
// Update guild role
router.patch('/guilds/:id/roles/:role_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'updateGuildRole', res, req.params.id, req.params.role_id, req.body)
})
// Remove guild role
router.delete('/guilds/:id/roles/:role_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'removeGuildRole', res, req.params.id, req.params.role_id)
})

// Get guild prune count
router.get('/guilds/:id/prune', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuildPruneCount', res, req.params.id, req.query)
})
// Start guild prune
router.get('/guilds/:id/prune', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'startGuildPrune', res, req.params.id, req.query)
})

// Get guild voice regions
router.get('/guilds/:id/regions', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuildVoiceRegions', res, req.params.id)
})
// Get guild invites
router.get('/guilds/:id/invites', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuildInvites', res, req.params.id)
})

// Get guild integrations
router.get('/guilds/:id/integrations', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuildIntegrations', res, req.params.id)
})
// Create guild integration
router.post('/guilds/:id/integrations', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'createGuildIntegration', res, req.params.id, req.body)
})
// Update guild integration
router.patch('/guilds/:id/integrations/:integration_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'updateGuildIntegration', res, req.params.id, req.params.integration_id, req.body)
})
// Remove guild integration
router.delete('/guilds/:id/integrations/:integration_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'removeGuildIntegration', res, req.params.id, req.params.integration_id)
})
// Sync guild integration
router.post('/guilds/:id/integrations/:integration_id', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'syncGuildIntegration', res, req.params.id, req.params.integration_id)
})

// Get guild embed
router.get('/guilds/:id/embed', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'getGuildEmbed', res, req.params.id)
})
// Update guild embed
router.patch('/guilds/:id/embed', (req, res) => {
  return utils.wrapRequest(req.rest, 'guild', 'updateGuildEmbed', res, req.params.id, req.body)
})

module.exports = router
