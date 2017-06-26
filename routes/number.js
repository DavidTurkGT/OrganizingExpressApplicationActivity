const express = require("express");
const router = express.Router();

let numberModel = require('../models/number.js');

router.get('/', function(req, res) {
  res.render('number', numberModel.obj);
});

router.post('/rng', function(req, res) {
  numberModel.randomNumberGenerator();
  // randomNumberGenerator();
  res.redirect('/number');
});

router.post('/list', function(req, res) {
  numberModel.randomNumberListGenerator();
  // randomNumbersGenerator();
  res.redirect('/number');
});

module.exports = router;
