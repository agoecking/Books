const user = require("../models/UserSchema.js");

class UserController {
  async store(req, res) {
    try {
      var result = await user.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByEmail(req, res) {
    try {
      var result = await user.find({ email: req.params.email });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async get(req, res) {
    var result = await user.find({});
    console.log(result);
    res.status(200).json(result);
  }
}

module.exports = new UserController();
