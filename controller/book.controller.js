const Book = require('../models/book.model');
const { syncIndexes } = require('../models/book.model');

module.exports = {
    getAllBook: async(req, res) =>{
        Book.find()
		.then(book => res.json(book))
		.catch(err => res.status(400).json('ErrL ' + err));
    },
    addBook: async(req, res) => {
        const newBook = await Book.create(req.body);
        res.json('Book added');
    },
    update: async(req, res) => {
        Book.findById(req.params.id)
            .then( Book => {
                Book.name = req.body.name;
                Book.author = req.body.author;
                Book.price = req.body.price;
                Book.urlimg = req.body.urlimg;
                Book.save();
            })
            .then(() => res.json('updated.'))
            .catch(err => res.status(400).json("Err: " + err));
    },
    delete: async(req, res) => {
        Book.findByIdAndDelete(req.params.id)
            .then(() => res.json('Book deleted.'))
            .catch(err => res.status(400).json('Err ' + err));
    },
    findByName: async(req, res) => {
        Book.find({name: {$regex: '.*' + req.params.name + '.*'}})
		.then(book => res.json(book))
		.catch(err => res.status(400).json('ErrL ' + err));
    },
    findByToppic: async(req, res) => {
        
    }
}