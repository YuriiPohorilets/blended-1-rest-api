const BooksModel = require("../models/BooksModel");
const asyncHandler = require("express-async-handler");

class BooksController {
  add = asyncHandler(async (req, res) => {
    const { price, title } = req.body;

    if (!price || !title) {
      // res
      //   .status(400)
      //   .json({ code: 400, message: "Plese provide all required fields" });
      res.status(400);
      throw new Error("Plese provide all required fields");
    }

    const book = await BooksModel.create({ ...req.body });
    if (!book) {
      res.status(400);
      throw new Error("Enable to save to DB");
    }
    res.status(201).json({
      code: 201,
      status: "Success",
      data: book,
    });
  });

  getAll = asyncHandler(async (req, res) => {
    const books = await BooksModel.find({});
    if (!books) {
      res.status(400);
      throw new Error("Unable to fetch books");
    }
    res.status(200).json({
      code: 200,
      status: "Success",
      qty: books.length,
      data: books,
    });
  });

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
