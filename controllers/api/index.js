const router = require('express').Router();
const userRoutes = require('./userRoutes');
const studentRoutes = require('./student-routes');

router.use('/user', userRoutes);
router.use('/student', studentRoutes);

module.exports = router;