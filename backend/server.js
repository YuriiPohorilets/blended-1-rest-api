const express = require("express");
const path = require("path");
const connectDb = require("../config/db");
require("colors");

// load config variables
const configPath = path.join(__dirname, "..", "config", ".env");
const dotenv = require("dotenv").config({
  path: configPath,
});

// console.log(dotenv);
console.log(process.env.PORT);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// http://localhost:62000/api/v1/books
// set Routes

app.use("/api/v1", require("./routes/booksRoutes"));
const errorHandler = require("./middlewares/errorHandler");

app.use(errorHandler);
connectDb();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT}`.bold.green.italic
  );
});
