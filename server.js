const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

const bookRoutes = require("./routes/book.route");
const usersRoute = require("./routes/user.route");
const commentRoute = require('./routes/comment.route');

app.use(cors());
app.use(express.json());
app.use("/api/book", bookRoutes);
app.use("/api/user", usersRoute);
app.use("/api/comment", commentRoute);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB databse connection enstablished successfully");
});

app.get("/", (req, res) => {
  res.send("Home");
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
