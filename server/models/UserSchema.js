const mongoose = require("mongoose");
const infoSchema = require("./InfoSchema");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  infos: [infoSchema],
});

module.exports = mongoose.model("users", user);
