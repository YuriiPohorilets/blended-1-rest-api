const BooksModel = require("../models/BooksModel");
const asyncHandler = require("express-async-handler");

class BooksController {
  add = asyncHandler(async (req, res) => {
    const { price, title } = req.body;

    if (!price || !title) {
      // res
      //   .status(400)
      //   .json({ code: 400, message: "Plese provide all required fields" });
      res.status(405);
      throw new Error("Plese provide all required fields");
    }

    // await BooksModel.create({ ...req.body });
  });

  getAll(req, res) {
    res.send("Get all books");
  }

  getOne(req, res) {
    res.send("Get one book");
  }

  update(req, res) {
    res.send("Update book");
  }

  remove(req, res) {
    res.send("Delete book");
  }
}

module.exports = new BooksController();
