const Book = require("../models/book.model");
const { syncIndexes } = require("../models/book.model");

module.exports = {
  getAll: async (req, res) => {
    Book.find()
      .then((book) => res.json(book))
      .catch((err) => res.status(400).json("ErrL " + err));
  },
  getPage: async (req, res) => {
    const page = req.params.page;
    Book.find()
      .skip(page * 20)
      .limit(20)
      .exec((err, books) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(books);
      });
  },
  countByCategogies: async (req, res) => {
    const categogy = req.params.categogy;
    if(categogy === 'All books'){
      Book.countDocuments({})
          .then(n => res.json(n))
          .catch(err => console.log(err));
    }else{
      Book.countDocuments({categogy: categogy})
          .then(n => res.json(n))
          .catch(err => console.log(err));
    }
  },
  countBySearchString: async (req, res) => {
    Book.countDocuments(
      {name: 
        {$regex: new RegExp(".*" + req.params.searchString.toLowerCase() + ".*", "i")}
    })
    .then(n => res.json(n))
    .catch(err => console.log(err));
  },
  getAllCategogies: async (req, res) => {
    Book.find().select('categogy').distinct("categogy")
    .then(categogy => {
      res.json(categogy);
    })
    .catch(err => res.json(err));
  },
  add: async (req, res) => {
    const newBook = await Book.create(req.body);
    res.json("Book added");
  },

  update: async (req, res) => {
    Book.findById(req.params.id)
      .then((Book) => {
        Book.name = req.body.name;
        Book.author = req.body.author;
        Book.price = req.body.price;
        Book.urlimg = req.body.urlimg;
        Book.save();
      })
      .then(() => res.json("updated."))
      .catch((err) => res.status(400).json("Err: " + err));
  },
  delete: async (req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then(() => res.json("Book deleted."))
      .catch((err) => res.status(400).json("Err " + err));
  },
  findByName: async (req, res) => {
    Book.find({ name: { $regex: new RegExp(".*" + req.params.name.toLowerCase() + ".*", "i") } })
      .skip(req.params.page * 20)
      .limit(20)
      .then((book) => res.json(book))
      .catch((err) => res.status(400).json("Err " + err));
  },
  findByCategogies: async (req, res) => {
    const categogies = req.params.categogies;
    const page = req.params.page;
    Book.find({categogy: {$regex: ".*" + categogies + ".*"}})
        .skip(page * 20)
        .limit(20)
        .then(books => res.json(books))
        .catch(err => console.log(err));
  },
};

