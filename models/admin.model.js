const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = {
	username: String,
	password: String
}

const Admin = mongoose.model('Admin', adminSchema, 'admin');

module.exports = Admin;