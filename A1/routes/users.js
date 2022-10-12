// File name:users.js
 //Student’s Name:Gayatrhi Srikanti 
 //StudentID: 301181090
 //Date: 06-Oct-2022



var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('placeholder');
});

module.exports = router;
