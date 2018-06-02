const pythag = require("nodepythagorean");
const colors = require('colors');

export default function calc(input) {
    inp = input.split(", ");
    console.log((pythag.findHypotenuse(inp[0], inp[1])).green);
}