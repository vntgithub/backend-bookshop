const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/:username', userController.checkUserExist);
router.get('/index', userController.getUserPerPage);

router.post('/create', userController.create);
router.post('/login', userController.login);
router.put('/:id', userController.update);
router.delete('/:id', userController.deleteById);

module.exports = router;