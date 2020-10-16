const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();


router.post('/create', userController.createUser);
router.post('/login', userController.login);
router.put('/update', userController.changePassword);


module.exports = router;