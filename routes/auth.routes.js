const { Router } = require('express');
const router = Router();

const authController = require('../controllers/auth.controller');

const { turnstile } = require('../middlewares');

router.post('/login', turnstile, authController.login);

module.exports = router;
