const express = require("express");
const router = express.Router();
const invoiceController = require("../controller/invoice.controller");

router.get("/getall", invoiceController.getAll);
router.get("/getbyuserid/:userId", invoiceController.getByUserId);
router.get("/getbystate/:state&:id", invoiceController.getByState);
router.post("/add", invoiceController.add)
router.put("/update", invoiceController.updateState);

module.exports = router;