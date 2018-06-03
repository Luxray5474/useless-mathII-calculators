const colors = require('colors');

module.exports = function calc(input) {
    var mainSplit = input.split(",,");
    var eq1 = mainSplit[1].split(",");
    var eq2 = mainSplit[2].split(",");
    var mainSplitElement1 = mainSplit[0].split(", ");
    var testVar = mainSplitElement1[0];
    var testVar2 = mainSplitElement1[1];

    if(eq1[2] === '-') {
        console.log(colors.green("x ".blue + "result: " + (parseInt(eq1[0]) * parseInt(testVar) - parseInt(eq1[3]))));
    } else {
        console.log("x ".blue + "result: " + (colors.green(parseInt(eq1[0]) * parseInt(testVar) + parseInt(eq1[3]))));
    };

    if(eq2[2] === '-') {
        console.log(colors.green("y ".red + "result: " + (parseInt(eq2[0]) * parseInt(testVar2) - parseInt(eq2[3]))));
    } else {
        console.log("y ".red + "result: " + (colors.green(parseInt(eq2[0]) * parseInt(testVar2) + parseInt(eq2[3]))));
    };

    return;
}