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

  async getById(req, res) {
    try {
      var result = await book.findById(req.params.bookId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    await book.deleteOne({ _id: req.params.bookId });
    var result = await book.find({});
    res.status(200).json(result);
  }

  async update(req, res) {
    try {
      let books = req.body;
      var result = await book.updateOne({ _id: books._id }, books);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new BookController();
