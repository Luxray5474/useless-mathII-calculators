const pythag = require("nodepythagorean");
const colors = require('colors');

module.exports = function calc(input) {
    inp = input.split(", ");
    console.log(colors.green(pythag.findHypotenuse(inp[0], inp[1])));
}