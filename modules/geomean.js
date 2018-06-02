const colors = require('colors');

export default function calc(input) {
  console.log(('Enter the two numbers to get the geom. mean of, then a sqrt you want to prove. \n').yellow + ("[n1], [n2]\n").gray);
  inp = input.split(", ");
  sqrtans = Math.sqrt(inp[0] * inp[1])
  console.log((sqrtans + "\n").green);
}