// File name:route.js
 //Student’s Name:Gayatrhi Srikanti 
 //StudentID: 301181090
 //Date: 06-Oct-2022


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page:'home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page: 'about'});
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products', page: 'products'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',page: 'services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact',page: 'contact'});
});

module.exports = router;