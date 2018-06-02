const colors = require("colors");

module.exports = function calc(input) {
    var inp = input.split(", ");
    console.log((inp[0] + "√" + inp[1] + " = " + (inp[0] * Math.sqrt(inp[1]))).green);
}