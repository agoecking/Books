const mongoose = require("mongoose");
const addressSchema = require("./AddressSchema");

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
  address: [addressSchema],
});

module.exports = mongoose.model("users", user);
