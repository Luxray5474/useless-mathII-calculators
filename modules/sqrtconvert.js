const colors = require("colors");

module.exports = function calc(input) {
    var inp = input.split(", ");
    console.log(colors.green(inp[0] + "√" + inp[1] + " = " + (inp[0] * Math.sqrt(inp[1]))));
}