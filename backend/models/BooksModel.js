// {
//     "author": "Alen Kcarrrr",
//     "title": "Easy way stop smoke",
//     "rating": "4.5",
//     "price": "150"
// }
const { model, Schema } = require("mongoose");

const booksSchema = Schema({
  author: {
    type: String,
    default: "Jhon Konor",
  },
  title: {
    type: String,
    required: [true, "DB: Field Title is required"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "DB: Field Price is required"],
  },
});

module.exports = model("books", booksSchema);
