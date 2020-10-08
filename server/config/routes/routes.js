const express = require('express');
const router = express.Router();
const user = require("../../models/UserSchema.js");
const userController = require("../../controllers/UserController.js");
const productController = require("../../controllers/ProductController.js");

router.get("/user", userController.get);
router.get("/:email", userController.getByEmail);
router.post("/user/registerUser", userController.store);
router.get("/book", productController.get)

module.exports = router;