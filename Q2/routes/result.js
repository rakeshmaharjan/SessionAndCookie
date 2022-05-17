var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {

    console.log("res:",res.session);
    console.log("req:",req.session);
    console.log(req.body);
    req.session.name = req.body.name;
    req.session.age = req.body.age;

    res.render('output', { name: req.session.name, age: req.session.age });

});

module.exports = router;
