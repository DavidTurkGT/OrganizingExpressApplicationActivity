let numberObj = {};

function randomNumberGenerator() {
  numberObj.number = [];
  numberObj.number.push(Math.floor(Math.random() * 1000000));
};

function randomNumberListGenerator() {
  numberObj.number = [];
  for (var i = 0; i < 15; i++) {
    let rng = Math.floor(Math.random() * 1000000);
    numberObj.number.push(rng);
  };
};

module.exports = {
  obj: numberObj,
  randomNumberGenerator: randomNumberGenerator,
  randomNumberListGenerator: randomNumberListGenerator
}
