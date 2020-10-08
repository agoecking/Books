const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);