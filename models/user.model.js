const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	//_id: mongoose.Types.ObjectId,
	username: String,
	password: String,
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;