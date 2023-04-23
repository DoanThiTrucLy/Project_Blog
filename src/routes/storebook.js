const express = require('express');
const router = express.Router();

const BookController = require('../app/controllers/BookController')

router.use('/book/create', BookController.show);
router.use('/', BookController.index );

module.exports = router;