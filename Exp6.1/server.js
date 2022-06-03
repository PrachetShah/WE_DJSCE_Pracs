const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb://localhost/Bookdb");

const bookschema = new mongoose.Schema({
  Book_title: String,
  ISBN_No: Number,
});

const book = new mongoose.model("book", bookschema);

app.use(cors());

// Configuration of parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(
//   express.static(

//   )
// );

app.get("/", (req, res) => {
  console.log(__dirname);
  //   res.sendFile(__dirname + "/home.html");
});

app.post("/book", (req, res) => {
  console.log(req.body);
  const b1 = new book(req.body);
  b1.save();
  res.send(req.body.Book_title + " Book got successfully added to database");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
