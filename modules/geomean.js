const colors = require('colors');

module.exports = function calc(input) {
  inp = input.split(",,");
  console.log(colors.green(Math.sqrt(inp[0] * inp[1])));
}