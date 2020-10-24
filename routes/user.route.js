const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/cookie', (req, res, next) => {
	res.cookie('session_id', 123123);
	res.send("cookie");
})
router.post('/create', userController.create);
router.post('/login', authMiddleware.checkCookie, userController.login);
router.put('/update', userController.update);


module.exports = router;