// const { index } = require("./NewsController");
const Beverage = require('../models/Beverages');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const Books = require('../models/Books');

class SiteController {

    //[GET] /
    index(req, res, next) {
        Beverage.find({})
            .then(beverages => {
                res.send({
                    beverages: mutipleMongooseToObject(beverages)
                });
            })
            .catch(next);

        Books.find({})
            .then(books => {
                res.send({
                    books: mutipleMongooseToObject(books)
                });
            })
            .catch(next);
        
    }

    //[GET] /search
    // search(req, res) {
    //     res.render('search');
    // }
}
module.exports = new SiteController;