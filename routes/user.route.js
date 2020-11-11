const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/getbyid/:id', userController.getById);
router.post('/check', userController.checkUserExist);
router.post('/create', userController.create);
router.post('/login', userController.login);
router.put('/update', userController.update);


module.exports = router;