const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

let wordObj = {};

function randomWordGenerator() {
  wordObj.words = [];
  wordObj.words.push(words[Math.floor(Math.random() * words.length)]);
};

function randomWordListGenerator() {
  wordObj.words = [];
  for (var i = 0; i < 15; i++) {
    let rng = Math.floor(Math.random() * words.length);
    wordObj.words.push(words[rng]);
  };
};

module.exports = {
  obj: wordObj,
  randomWordGenerator: randomWordGenerator,
  randomWordListGenerator: randomWordListGenerator
};
