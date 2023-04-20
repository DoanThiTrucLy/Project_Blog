const express = require('express');
const router = express.Router();

const TeasController = require('../app/controllers/TeasController')


router.use('/:slug', teasController.show);

router.use('/', teasController.index );

module.exports = router;