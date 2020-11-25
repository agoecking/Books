const mongoose = require("mongoose");

const info = new mongoose.Schema({
  sector: {
    type: String,
    enum: ["caixa", "administracao", "estoque", "finenceiro"],
    required: true,
  },
  cpf: {
    type: Number,
    required: true,
  },
});

module.exports = info;
