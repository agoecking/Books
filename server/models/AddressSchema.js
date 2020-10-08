const mongoose = require("mongoose");

const address = new mongoose.Schema({
  rua: { type: String, required: true },
  bairro: { type: String, required: true },
  cep: { type: Number, required: true },
  numero: { type: Number, required: true },
});

module.exports = address;
