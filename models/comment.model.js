const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	_idproduct: mongoose.Types.ObjectId,
	_iduser: mongoose.Types.ObjectId,
	content: String

});

const Comment = mongoose.model('Comment', commentSchema, 'comments');

module.exports = Comment;