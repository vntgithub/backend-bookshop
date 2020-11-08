const Invoice = require("../models/invoice.model");
// const { syncIndexes } = require("../models/Invoice.model");

module.exports = {
  getAll: async (req, res) => {
    Invoice.find()
      .then((Invoice) => res.json(Invoice))
      .catch((err) => res.status(400).json("ErrL " + err));
  },
  getPage: async (req, res) => {
    const page = req.params.page;
    Invoice.find()
      .skip(page * 20)
      .limit(20)
      .exec(function (err, Invoices) {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(Invoices);
      });
  },
  getByProductId: async (req, res) => {
    Invoice.find().select('categogy').distinct("categogy")
    .then(categogy => {
      res.json(categogy);
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

  // findByName: async (req, res) => {
  //   Invoice.find({ name: { $regex: ".*" + req.params.name + ".*" } })
  //     .then((Invoice) => res.json(Invoice))
  //     .catch((err) => res.status(400).json("Err " + err));
  // },
  // findByCategogies: async (req, res) => {
  //   Invoice.find({categogy: {$regex: ".*" + req.params.categogies + ".*"}})
  //       .then(Invoices => res.json(Invoices))
  //       .catch(err => console.log(err));
  // },
};

