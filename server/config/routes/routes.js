const express = require('express');
const router = express.Router();
const user = require("../../models/UserSchema.js");
const userController = require("../../controllers/UserController.js");

router.get("/listUser", userController.get);
router.get("/:email", userController.getByEmail);
router.post("/registerUser", userController.store);

module.exports = router;