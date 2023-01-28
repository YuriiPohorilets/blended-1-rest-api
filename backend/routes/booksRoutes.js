const express = require("express");
const booksRouter = express.Router();
const BooksController = require("../controllers/BooksController");

// 1. Додати книгу
booksRouter.post(
  "/books",
  (req, res, next) => {
    console.log("Спрацював joi");
    next();
  },
  BooksController.add
);

// 2. Отримати всі
booksRouter.get("/books", BooksController.getAll);

// 3. Отримати одну
booksRouter.get("/books/:id", BooksController.getOne);

// 4. Оновити книгу
booksRouter.put("/books/:id", BooksController.update);

// 5. Видалити книгу
booksRouter.delete("/books/:id", BooksController.remove);

module.exports = booksRouter;
