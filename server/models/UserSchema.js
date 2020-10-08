const mongoose = require("mongoose");
const addressSchema = require("./AddressSchema.js")

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true},

  address: [addressSchema],
  createdAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model("Users", userSchema);
