const mongoose = require("mongoose");

const address = new mongoose.Schema({
  rua: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  complemento: {
    type: String,
  },
  cep: {
    type: String,
    required: true,
  },
});

module.exports = address;