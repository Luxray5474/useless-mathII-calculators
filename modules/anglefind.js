const colors = require('colors');

export default function calc(input) {
  var inp = input.split(", ");
  console.log((180 - (+inp[0] + +inp[1])).green);
}

