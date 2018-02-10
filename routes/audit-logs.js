const router = require('express').Router()
const utils = require('../utils')
router.get('/guilds/:id/audit-logs', async (req, res) => {
  return utils.wrapRequest(req.rest, 'auditlog', 'getAuditlog', res, req.params.id, req.query)
})
module.exports = router
