// Importing Libraries
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 3000;

let books = [];

app.use(cors());

// Configuration of parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/book", (req, res) => {
  const book = req.body;
  console.log(book);
  books.push(book);
  res.status(200).send("Book is added to database");
  console.log("Book Added");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
