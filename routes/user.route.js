const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/getbyid/:id', userController.getById);
router.get('/getperpage/:page', userController.getUserPerPage);
router.get('/count', userController.countUsers);
router.get('/search/:username', userController.searchByUsername);
router.post('/check', userController.checkUserExist);
router.post('/create', userController.create);
router.post('/login', userController.login);
router.put('/update', userController.update);
router.delete('/delete/:id', userController.deleteById);

module.exports = router;