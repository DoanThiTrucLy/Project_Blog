// const { index } = require("./NewsController");
const Beverage = require('../models/Beverages');
const { multipleMongooseToObject } = require('../../util/mongoose');
const Books = require('../models/Books');

class SiteController {

    //[GET] /
    index(req, res, next) {
        Beverage.find({})
            .then(beverages => {
                res.send({ beverages: multipleMongooseToObject(beverages)});
            })
            .catch(next);
    }

    abc(req, res, next) {
        Books.find({})
            .then(books => {
                res.send({
                    books: multipleMongooseToObject(books)
                });
            })
            .catch(next);
    }

}
module.exports = new SiteController;