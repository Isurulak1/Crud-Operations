const express = require('express');
const router = express.Router();

const User = require('../Model/UserModel');

const UserController = require('../Controllers/UserControl');

router.get('/',UserController.getAllUsers);
router.post('/',UserController.addUsers);
router.get('/:id',UserController.getById);
router.put('/:id',UserController.UpdateUser);
router.delete('/:id',UserController.deleteUser);


module.exports = router;