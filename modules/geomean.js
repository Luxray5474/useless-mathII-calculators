const colors = require('colors');

module.exports = function calc(input) {
  inp = input.split(", ");
  sqrtans = Math.sqrt(inp[0] * inp[1])
  console.log((sqrtans + "\n").green);
}