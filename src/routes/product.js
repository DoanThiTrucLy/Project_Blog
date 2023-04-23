const express = require('express');
const router = express.Router();

const BevarageController = require('../app/controllers/BeverageController')

router.use('/beverage/create', BeverageController.show);
router.use('/', BeverageController.index );

module.exports = router;