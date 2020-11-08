const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
	name: String,
	phone: String,
	adress: String,
	date: Date,
	cart: Array,
});

const Invoice = mongoose.model('Invoice', invoiceSchema, 'invoices');

module.exports = Invoice;

