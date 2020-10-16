const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const bookRoutes = require('./routes/book.route');
const usersRoute = require('./routes/user.route');

app.use(cors());
app.use(express.json());
app.use('/api/book', bookRoutes);
app.use('/api/user', usersRoute);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB databse connection enstablished successfully");

}) 


app.get('/', (req, res) => {
	res.send('Home page');
})
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);

})