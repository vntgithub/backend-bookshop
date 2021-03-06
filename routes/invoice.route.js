const express = require("express");
const router = express.Router();
const invoiceController = require("../controller/invoice.controller");

router.get("/getperpage/:page", invoiceController.getPerPage);
router.get("/findbyname/:name", invoiceController.findByName);
router.get("/count", invoiceController.count);
router.get("/getbyuserid/:userId", invoiceController.getByUserId);
router.get("/search/:id", invoiceController.getById);
router.get("/getallbystate/:page&:state", invoiceController.getPerPageByState);
router.get("/getbystate/:state&:id", invoiceController.getByState);
router.post("/add", invoiceController.add)
router.put("/update", invoiceController.updateState);

module.exports = router;