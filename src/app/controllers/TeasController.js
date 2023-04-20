
class TeasController {

    //[GET] /news
    index(req, res) {
        res.render('tea');
    }

    //[GET] /news/:slug
    show(req, res){
        res.send('NEW DETAIL!!!');
    }
}

module.exports = new TeasController;
