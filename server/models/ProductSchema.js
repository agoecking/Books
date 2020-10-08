const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  genre: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("products", productSchema);