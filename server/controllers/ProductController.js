const product = require("../models/ProductSchema");

class ProductController {
  async store(req, res) {
    try {
      var result = await product.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByName(req, res) {
    try {
      var result = await product.find({ bookName: req.params.bookName });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByAuthor(req, res) {
    try {
      var result = await product.find({ author: req.params.author });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByGenre(req, res) {
    try {
      var result = await product.find({ genre: req.params.genre });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async get(req, res) {
    try {
      var result = await product.find({});
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new ProductController();
