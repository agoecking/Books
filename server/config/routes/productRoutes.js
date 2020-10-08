const express = require('express');
const productRouter = express.Router();
const product = require("../../models/ProductSchema.js");
const productController = require("../../controllers/ProductController.js");

productRouter.get("/listBook", productController.getBooks);
productRouter.get("/searchBy/:bookName", productController.getByName);
productRouter.get("/searchByAuthor/:author", productController.getByAuthor);
productRouter.get("/searchByGenre/:genre", productController.getByGenre);
productRouter.post("/registerBook", productController.store);

module.exports = productRouter;