var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
console.log("listcookie:",req.cookies.cookieList);
  res.render('listCookie',{cookieList:req.cookies.cookieList});

});

module.exports = router;
