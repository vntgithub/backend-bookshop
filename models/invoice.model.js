const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
	userId: String,
	name: String,
	phone: String,
	adress: String,
	date: Date,
	cart: Array,
	state: Boolean
});

const Invoice = mongoose.model('Invoice', invoiceSchema, 'invoices');

module.exports = Invoice;

