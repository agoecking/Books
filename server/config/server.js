"use strict";

console.clear();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const productRoutes = require("./routes/productRoutes.js");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);
app.use("/", productRoutes);

const port = 1234;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

