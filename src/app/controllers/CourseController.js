// const { index } = require("./NewsController");
const Course = require('../models/Course');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController {

    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
        .then((course) =>
            res.render('courses/show', { course: mongooseToObject(course) })
        )
        .catch(next);
    }
    

   //[GET] /course/create
    create(req, res, next) {
        res.render('courses/create')
    }

    //[POST] /course/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://toidicodedao.files.wordpress.com/2021/02/img_f0046f5ad169-1-e1…`
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            });
    }
}
module.exports = new CourseController();