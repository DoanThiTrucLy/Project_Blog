const express = require('express');
const router = express.Router();

const BookController = require('../app/controllers/BookController')


router.post('/store', BookController.store);

module.exports = router;