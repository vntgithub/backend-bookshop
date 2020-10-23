const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');


router.post('/create',userController.createUser);
router.post('/login', userController.login);
router.put('/update', userController.changeInfo);


module.exports = router;