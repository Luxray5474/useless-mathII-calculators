const colors = require('colors');

module.exports = function calc(input) {
    var mainsplit = input.split(", ");
    var eq1 = mainsplit[0].split(" ");
    var eq2 = mainsplit[1].split(" ");
    var testvar = mainsplit[2];
    var testvar2 = mainsplit[3];

    if(eq1[2] === '-') {
        var ans1 = parseInt(eq1[0]) * parseInt(testvar) - parseInt(eq1[3]) * parseInt(testvar2);
        console.log((ans1).green);
    } else {
        var ans1 = parseInt(eq1[0]) * parseInt(testvar) + parseInt(eq1[3]) * parseInt(testvar2);
        console.log((ans1).green);
    }

    if(eq2[2] === '-') {
        var ans2 = parseInt(eq2[0]) * parseInt(testvar) - parseInt(eq2[3]) * parseInt(testvar2);
        console.log((ans2).green);
    } else {
        var ans2 = parseInt(eq2[0]) * parseInt(testvar) + parseInt(eq2[3]) * parseInt(testvar2);
        console.log((ans2).green);
    }

	return;
}