const Group = require('../db/mongodb/models/group');

exports.findAll = () => {
  return Group.find().lean();
};

exports.create = (payload = {}) => {
  return Group.create(payload);
};

exports.delete = async (groupId) => {
  const result = await Group.deleteOne({ _id: groupId });
  return result.deletedCount;
};
