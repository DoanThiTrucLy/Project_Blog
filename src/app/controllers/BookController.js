const Book= require('../models/Books');
const { multipleMongooseToObject } = require('../../util/mongoose');
class BookController {

    //[GET] /news
    index(req, res) {
        res.render('/book');
    }

    //[GET] /news/:slug
    show(req, res){
        res.send('NEW DETAIL!!!');
    }

    // [POST] /book/store
    store(req, res, next) {

        const formData = req.body;
        const book = new Book(formData);
        book.save()
            .then(() => res.json({
                status: 200
            }))
            .catch(() => res.json({
                status: 500
            }));

    }

}

module.exports = new BookController;
