const Invoice = require("../models/invoice.model");
// const { syncIndexes } = require("../models/Invoice.model");

module.exports = {
  getAll: async (req, res) => {
    Invoice.find()
      .then((Invoice) => res.json(Invoice))
      .catch((err) => res.status(400).json("ErrL " + err));
  },
  getByUserId: async (req, res) => {
    const userId = req.params.userId
    Invoice.find({userId: userId})
    .then(invoices => {
      res.json(invoices);
    })
    .catch(err => res.json(err));
  },
  add: async (req, res) => {
    const invoice = {
      ...req.body,
      date: Date.parse(req.body.date)
    };
    const newInvoice = await Invoice.create(invoice);
    res.json("Invoice added");
  },
  
};

