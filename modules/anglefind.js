const colors = require('colors');

module.exports = function calc(input) {
  var inp = input.split(", ");
  console.log((180 - (+inp[0] + +inp[1])).green);
}

