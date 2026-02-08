const usersService = require('../services/user.service');

const { asyncHandler } = require('../middlewares');

const { exclude } = require('../config/db/mysql/helpers');

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await usersService.findAll('admin');
  res.json(users);
});

exports.createUser = asyncHandler(async (req, res) => {
  const user = await usersService.create(req.body);
	const userDto = exclude(user).public().json()
  res.status(201).json(userDto);
});
