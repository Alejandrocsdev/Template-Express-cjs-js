const { Router } = require('express');
const router = Router();

const groupsController = require('../controllers/group.controller');

router.get('/', groupsController.getGroups);
router.post('/', groupsController.createGroup);
router.delete('/:groupId', groupsController.deleteGroup);

module.exports = router;
