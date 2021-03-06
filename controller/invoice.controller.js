const Invoice = require("../models/invoice.model");
// const { syncIndexes } = require("../models/Invoice.model");

module.exports = {
  getPerPage: async (req, res) => {
    const page = req.params.page
    await Invoice.find({})
      .skip(page*20)
      .limit(20)
      .sort({date: -1})
      .then((Invoices) => res.json(Invoices))
      .catch((err) => res.status(400).json("ErrL " + err));
  },
  getPerPageByState: async(req, res) => {
    const page = req.params.page;
    const state = req.params.state;
    await Invoice.find({state: state})
      .skip(page*20)
      .limit(20)
      .sort({date: -1})
      .then((Invoices) => res.json(Invoices))
      .catch((err) => res.status(400).json("ErrL " + err));
  },
  count: async (req, res) => {
    await Invoice.countDocuments({})
                 .then(n => res.json(n))
                 .catch(err => console.log(err));
  },
  getByUserId: async (req, res) => {
    const userId = req.params.userId
    await Invoice.find({userId: userId})
    .sort({date: -1})
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
    await Invoice.findById(id)
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
    await Invoice.find({userId: id})
    .then(arrInvoice => {
      const rs = arrInvoice.filter(invoice => invoice.state === state);
      res.json(rs);
    })
    .catch(err => console.log(err))
  },
  getById: async(req, res) => {
    await Invoice.findById(req.params.id)
           .then(invoice => res.json(invoice))
           .catch(err => console.log(err));
  },
  findByName: async(req, res) => {
    await Invoice.find({name: { $regex: new RegExp(".*" + req.params.name.toLowerCase() + ".*", "i") }})
    .then(invoices => res.json(invoices))
    .catch(err => console.log(err))
  }
  
};

