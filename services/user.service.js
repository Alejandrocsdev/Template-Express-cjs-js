const { User } = require('../db/mysql/models');

exports.findAll = async (scope) => {
  return scope ? User.scope('admin').findAll() : User.findAll();
};

exports.create = async (payload) => {
  return User.create(payload);
};
