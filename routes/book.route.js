const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controller");

router.get("/getallbooks", bookController.getAll);
router.get("/getbooks/:page", bookController.getPage);
router.get("/getcategogies", bookController.getAllCategogies);
router.post("/addbook", bookController.add);
router.put("/update/:id", bookController.update);
router.delete("/delete/:id", bookController.delete);
router.get("/findbyname/:name", bookController.findByName);
router.get("/findbycategogies/:categogies", bookController.findByCategogies);
module.exports = router;


//donesdgsd