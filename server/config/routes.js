const express = require("express");
const router = express.Router();
const user = require("../models/UserSchema");
const userControllers = require("../controllers/UserController");
const book = require("../models/BookSchema");
const bookControllers = require("../controllers/BookController");

//user routes
router.post("/user/register", userControllers.store);
router.get("/user", userControllers.get);
router.delete("/user/delete/:userId", userControllers.delete);
router.put("/user/update", userControllers.update);
router.get("/user/:userId", userControllers.getById);

//book routes
router.post("/book/register", bookControllers.store);
router.get("/book", bookControllers.get);
router.get("/book/:bookId", bookControllers.getById);
router.delete("/book/delete/:bookId", bookControllers.delete);
router.put("/book/update", bookControllers.update);

module.exports = router;
