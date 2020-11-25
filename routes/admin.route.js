const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controller');

router.get('/getbycookie/:cookie', adminController.getByCookie);
router.post('/check', adminController.checkExist);
router.post('/add', adminController.add);
router.post('/login', adminController.login);
router.put('/update', adminController.update);

module.exports = router;