const router = require('express').Router();
const userRoutes = require('./userRoutes');
const studentRoutes = require('./student-routes');
const commentRoutes = require('./commentRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/user', userRoutes);
router.use('/student', studentRoutes);
router.use('/comment', commentRoutes);
router.use('/events', eventRoutes);

module.exports = router;