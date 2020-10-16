const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	// _id: mongoose.Types.ObjectId,
	name: String,
	author: String,
	price: Number,
	urlimg: String,
});

const Book = mongoose.model('Book', bookSchema, 'book');

module.exports = Book;