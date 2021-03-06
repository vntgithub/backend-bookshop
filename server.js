const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongodb = require("./mongodb.js");

const bookRoutes = require("./routes/book.route");
const usersRoute = require("./routes/user.route");
const commentRoutes = require('./routes/comment.route');
const invoiceRoutes = require('./routes/invoice.route');
const adminRoutes = require('./routes/admin.route');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser('afhTrnC12457'));
app.use("/api/book", bookRoutes);
app.use("/api/user", usersRoute);
app.use("/api/comment", commentRoutes);
app.use("/api/invoice", invoiceRoutes);
app.use("/api/admin", adminRoutes);

mongodb.connection();

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
