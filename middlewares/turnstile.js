const api = require('../config/api');

const CustomError = require('../errors/CustomError');

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const verifyTurnstile = async (token, ip) => {
  const body = {
    secret: process.env.TURNSTILE_SECRET,
    response: token,
    remoteip: ip,
  };

  const { data } = await api.post(VERIFY_URL, body);
  return data;
};

const turnstile = async (req, res, next) => {
  const token = req.body.turnstileToken;

  if (!token) {
    throw new CustomError(400, 'Turnstile token missing');
  }

  const result = await verifyTurnstile(token, req.ip);

  if (!result.success) {
    throw new CustomError(403, 'Captcha verification failed');
  }

  next();
};

module.exports = turnstile;
