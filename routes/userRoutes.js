const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

router.get('/worko/user', UserController.listUsers);
router.get('/worko/user/:userId', UserController.getUser);
router.post('/worko/user', UserController.createUser);
router.put('/worko/user/:userId', UserController.updateUser);
router.patch('/worko/user/:userId', UserController.patchUser);
router.delete('/worko/user/:userId', UserController.deleteUser);

module.exports = router;
