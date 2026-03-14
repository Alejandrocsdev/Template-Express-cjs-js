const { asyncHandler } = require('../middlewares');

exports.login = asyncHandler(async (req, res) => {
  res.json({ message: 'Login successfully' });
});
