const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const portalRoutes = require('./portalRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/portal', portalRoutes);

module.exports = router;