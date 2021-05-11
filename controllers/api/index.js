const router = require('express').Router();
const userRoutes = require('./userRoutes');
const studentRoutes = require('./student-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/student', studentRoutes);
router.use('/comment', commentRoutes);

module.exports = router;