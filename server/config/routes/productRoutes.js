const express = require('express');
const productRouter = express.Router();
const product = require("../../models/ProductSchema.js");
const productController = require("../../controllers/ProductController.js");

productRouter.get("/product/:tavios", productController.get);
productRouter.get("/searchBy/:bookName", productController.getByName);
productRouter.get("/searchByAuthor/:author", productController.getByAuthor);
productRouter.get("/searchByGenre/:genre", productController.getByGenre);
productRouter.post("/product/registerBook", productController.store);

module.exports = productRouter;