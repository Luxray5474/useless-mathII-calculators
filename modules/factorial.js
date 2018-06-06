const colors = require('colors');
const math = require('mathjs');

module.exports = function calc(input) {
    var inp = (input).split(",,");
    console.log(colors.green((math.factorial(inp[0])) / (math.factorial(inp[1]))));
    return;
}

