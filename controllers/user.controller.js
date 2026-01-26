const CustomError = require('../errors/CustomError');

exports.getUsers = (req, res) => {
  if (!req.user) throw new CustomError(400, 'User not found');
  res.json('Users');
};
