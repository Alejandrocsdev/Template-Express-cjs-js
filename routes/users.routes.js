const { Router } = require('express');
const router = Router();

const usersController = require('../controllers/user.controller');

router.get('/', usersController.getUsers);

module.exports = router;
