// const { index } = require("./NewsController");
const Course = require('../models/Blog');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {

    //[GET] / me/stored/courses
    storedCourses(req, res) {
        res.render('me/stored-course');

    }
}
module.exports = new MeController;