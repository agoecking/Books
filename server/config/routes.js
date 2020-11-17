const express = require('express');
const router = express.Router();
const user = require('../models/UserSchema');
const userControllers = require('../controllers/UserController');
const book = require('../models/BookSchema');
const bookControllers = require('../controllers/BookController');

router.post("/user/register", userControllers.store);
router.get("/user/:email", userControllers.getByEmail);
router.get("/user", userControllers.get);

router.post("/book/register", bookControllers.store);
router.get("/book", bookControllers.get);
router.get("/book/:genre", bookControllers.getByGenre);

module.exports = router;