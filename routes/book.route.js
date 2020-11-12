const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controller");

router.get("/getallbooks", bookController.getAll);
router.get("/getbooks/:page", bookController.getPage);
router.get("/countbycategogies/:categogy", bookController.countByCategogies);
router.get("/getcategogies", bookController.getAllCategogies);
router.get("/findbyname/:name", bookController.findByName);
router.get("/findbycategogies/:categogies", bookController.findByCategogies);
router.get("/countbysearchstring/:searchString", bookController.countBySearchString);
router.post("/addbook", bookController.add);
router.put("/update/:id", bookController.update);
router.delete("/delete/:id", bookController.delete);

module.exports = router;


//donesdgsd