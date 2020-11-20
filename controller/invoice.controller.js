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
      date: Date.parse(req.body.date),
      state: 'Waitting'
    };
    const newInvoice = await Invoice.create(invoice);
    res.json("Invoice added");
  },
  updateState: async (req, res) => {
    const newState = req.body.state;
    const id = req.body.id;
    Invoice.findById(id)
    .then(invoice => {
      invoice.state = newState;
      invoice.save();
      res.json("updated.");
    })
    .catch(err => console.log(err));
  },
  getByState: async (req, res) => {
    const state = req.params.state;
    const id = req.params.id;
    Invoice.find({userId: id})
    .then(arrInvoice => {
      const rs = arrInvoice.filter(invoice => invoice.state === state);
      res.json(rs);
    })
    .catch(err => console.log(err))
  }
  
};

