const express = require("express");
const router = express.Router();
const invoiceController = require("../controller/invoice.controller");

router.get("/getall", invoiceController.getAll);
router.post("/add", invoiceController.add)
router.get("/getbyuserid/:userId", invoiceController.getByUserId);

module.exports = router;