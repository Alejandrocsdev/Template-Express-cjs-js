const { Router } = require('express');
const router = Router();

const authRoutes = require('./auth.routes');
const usersRoutes = require('./users.routes');
const groupsRoutes = require('./groups.routes');

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/groups', groupsRoutes);

module.exports = router;
