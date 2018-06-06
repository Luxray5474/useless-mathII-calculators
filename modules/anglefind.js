const colors = require('colors');

module.exports = function calc(input) {
  var inp = (input).split(",,");
  var ans = 180 - (+inp[0] + +inp[1]);
  if(ans == 180) {
    console.log(colors.magenta("180; no arguments passed"));
  } else { 
    console.log(colors.green(ans));
  }
  return;
}

