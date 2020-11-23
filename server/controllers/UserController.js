const user = require("../models/UserSchema");

class UserController {
  async store(req, res) {
    try {
      var result = await user.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req, res) {
    try {
      var result = await user.findById(req.params.userId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      let users = req.body;
      var result = await user.updateOne({ _id: users._id }, users);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async get(req, res) {
    var result = await user.find({});
    res.status(200).json(result);
  }

  async delete(req, res) {
    await user.deleteOne({ _id: req.params.userId });
    var result = await user.find({});
    res.status(200).json(result);
  }
}

module.exports = new UserController();
