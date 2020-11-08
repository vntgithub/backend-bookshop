const express = require("express");
const router = express.Router();
const invoiceController = require("../controller/invoice.controller");

router.get("/getallinvoice", invoiceController.getAll);
router.post("/add", invoiceController.add)
// router.get("/getinvoicebyuserid/:id", invoiceController.getByUserId);
// router.get("/getinvoicebyproductid/:productid", invoiceController.getByProductId);
// router.get("/getinvoicebydate/:date", invoiceController.getByDate);
module.exports = router;