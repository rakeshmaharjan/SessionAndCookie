var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {

    console.log('add to cart: ', req.session.cart);

    if (req.session.cart) {
        let product = {
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price
        };
        let cart = req.session.cart;

        if (cart.find(x => x.name === product.name)) {
            let p = cart.find(x => x.name === product.name);
            p.quantity = product.quantity==='' ? p.quantity : product.quantity;
            p.price = product.price==='' ? p.price : product.price;
        }
        else {
            cart.push(product);
        }
        req.session.cart = cart;
    }
    else {
        console.log('else');
        req.session.cart = [{ name: req.body.name, quantity: req.body.quantity, price: req.body.price }];
    }
    console.log(req.session.cart);
    res.render('shoppingCart', { productList: req.session.cart });
});

module.exports = router;
