const express = require('express');
const router = express.Router();
const bookController = require('../controller/book.controller');



router.get('/getallbook', bookController.getAllBook);
router.post('/addbook', bookController.addBook);
router.put('/update/:id', bookController.update);
router.delete('/delete/:id', bookController.delete);
router.get('/findbyname/:name', bookController.findByName);
module.exports = router;
