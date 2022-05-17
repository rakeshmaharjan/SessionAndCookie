var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    console.log("cookielist: ", req.cookies.cookieList);
    if (req.cookies.cookieList) {
        let cookieList = req.cookies.cookieList;//JSON.parse(req.cookies.cookieList);
        cookieList.push({ key: req.body.key, value: req.body.value });
        //res.cookies.cookieList.push({ key: req.body.key, value: req.body.value });
        console.log("cookie list --------:", cookieList);
        res.cookie("cookieList" , cookieList);
    }
    else {
        res.cookie("cookieList" , [{ key: req.body.key, value: req.body.value }]);
    }

 
    res.redirect('listCookie');
});

module.exports = router;
