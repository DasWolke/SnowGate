let router = require('express').Router();
const utils = require('../utils');
// List Voice Regions
router.get('/voice/regions', async (req, res) => {
    return utils.wrapRequest(req.rest, 'voice', 'getVoiceRegions', res);
});
module.exports = router;