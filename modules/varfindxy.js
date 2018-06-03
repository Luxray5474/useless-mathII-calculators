const colors = require('colors');

module.exports = function calc(input) {
    var mainSplit = input.split(",,");
    var eq1 = mainSplit[1].split(",");
    var eq2 = mainSplit[2].split(",");
    var mainSplitElement1 = mainSplit[0].split(", ");
    var testVar = mainSplitElement1[0];
    var testVar2 = mainSplitElement1[1];

    if(eq1[2] === '-') {
        console.log("x ".blue + "results: " + colors.green(parseInt(eq1[0]) * parseInt(testVar) - parseInt(eq1[3]) * parseInt(testVar2)));
    } else {
        console.log("x ".blue + "results: " + colors.green(parseInt(eq1[0]) * parseInt(testVar) + parseInt(eq1[3]) * parseInt(testVar2)));
    }

    if(eq2[2] === '-') {
        console.log("y ".red + "results: " + colors.green(parseInt(eq2[0]) * parseInt(testVar) - parseInt(eq2[3]) * parseInt(testVar2)));
    } else {
        console.log("y ".red + "results: " + colors.green(parseInt(eq2[0]) * parseInt(testVar) + parseInt(eq2[3]) * parseInt(testVar2)));
    }

	return;
}