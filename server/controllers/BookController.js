const book = require("../models/BookSchema");

class BookController {
  async store(req, res) {
    try {
      var result = await book.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async get(req, res) {
    try {
      var result = await book.find({});
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByGenre(req, res) {
    try {
      var result = await book.find({ genre: req.params.genre });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new BookController();