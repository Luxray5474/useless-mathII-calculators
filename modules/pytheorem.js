const pythag = require("nodepythagorean");
const colors = require('colors');

export default function calc(input) {
    console.log(('Enter the lengths of the two legs of the triangle. \n').yellow + ("[leg1], [leg2]\n").gray);
    inp = input.split(", ");
    console.log((pythag.findHypotenuse(inp[0], inp[1])).green);
}