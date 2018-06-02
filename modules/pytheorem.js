const pythag = require("nodepythagorean");
const colors = require('colors');

module.exports = function calc(input) {
    inp = input.split(", ");
    console.log((pythag.findHypotenuse(inp[0], inp[1])).green);
}