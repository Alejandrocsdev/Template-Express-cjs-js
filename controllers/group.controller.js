const groupsService = require('../services/group.service');

const { asyncHandler } = require('../middlewares');

exports.getGroups = asyncHandler(async (req, res) => {
  const groups = await groupsService.findAll();
  res.json(groups);
});

exports.createGroup = asyncHandler(async (req, res) => {
  const group = await groupsService.create(req.body);
  res.status(201).json(group);
});

exports.deleteGroup = asyncHandler(async (req, res) => {
  const { groupId } = req.params;

  const deletedCount = await groupsService.delete(groupId);

  if (deletedCount === 0) {
    return res.status(404).json({ message: 'Group not found' });
  }

  res.status(200).json({ message: 'Group deleted successfully' });
});