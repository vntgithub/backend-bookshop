const express = require("express");
const router = express.Router();
const commnetController = require("../controller/comment.controller");

router.get('/get/:id', commnetController.getCommentByIdProduct);//get by id prpduct
router.get('/add/', commnetController.addComment);
router.put('/update', commnetController.update);
router.delete('/delete/:id', commnetController.delete);
module.exports = router;


//done