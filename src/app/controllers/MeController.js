// const { index } = require("./NewsController");
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {

    //[GET] / me/stored/courses
    storedCourse(req, res) {
        res.render('me/stored-course');

    }
}
module.exports = new MeController;