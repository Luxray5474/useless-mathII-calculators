const colors = require('colors');

export default function calc(input) {
  console.log(('Enter the two known angles. \n').yellow + ('[angle1] [angle2] \n').gray);
  var inp = input.split(" ");
  console.log((180 - (+inp[0] + +inp[1])).green);
}

