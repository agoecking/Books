const mongoose = require("mongoose");

const book = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["disponivel", "indisponivel", "analise"],
    default: "disponivel",
  },
});

module.exports = mongoose.model("books", book);
