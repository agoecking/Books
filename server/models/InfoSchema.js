const mongoose = require("mongoose");

const info = new mongoose.Schema({
  sector: {
    type: String,
    enum: ["caixa", "administracao", "estoque", "financeiro"],
    required: true,
  },
  cpf: {
    type: Number,
    required: true,
  },
});

module.exports = info;
