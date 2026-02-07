const { asyncHandler } = require('../middlewares');

exports.getUsers = asyncHandler(async (req, res) => {
  res.json('Users');
});
