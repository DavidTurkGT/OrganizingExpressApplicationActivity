const express = require('express');
const router = express.Router();

const wordModel = require('../models/word.js');

router.get('/', function(req, res) {
  res.render('word', wordModel.obj);
});

router.post('/list', function(req, res) {
  wordModel.randomWordListGenerator();
  // randomWordsGenerator();
  res.redirect('/word');
});

router.post('/random', function(req, res) {
  wordModel.randomWordGenerator();
  // randomWordGenerator();
  res.redirect('/word');
});

module.exports = router;
