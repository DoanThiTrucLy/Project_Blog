const express = require('express');
const router = express.Router();

const BeverageController = require('../app/controllers/BeverageController')


router.post('/store', BeverageController.store);

router.get('/', BeverageController.index);

module.exports = router;