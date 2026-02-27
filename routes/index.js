const { Router } = require('express');
const router = Router();

const usersRoutes = require('./users.routes');
const groupsRoutes = require('./groups.routes');

router.use('/users', usersRoutes);
router.use('/groups', groupsRoutes);

module.exports = router;
