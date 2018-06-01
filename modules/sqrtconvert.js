const colors = require("colors");

export default function calc(input) {
    console.log(('Enter the radical you want to convert into decimal. \n').yellow + ("[n1] [n2(number inside the √)]\n").gray);
    var inp = input.split(" ");
    console.log((inp[0] + "√" + inp[1] + " = " + (inp[0] * Math.sqrt(inp[1]))).green);
}