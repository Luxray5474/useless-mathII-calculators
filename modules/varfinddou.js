const colors = require('colors');

module.exports = function calc(input) {
    var mainSplit = input.split(",,");
    var eq1 = mainSplit[1].split(",");
    var eq2 = mainSplit[2].split(",");
    var mainSplitElement1 = mainSplit[0].split(", ");
    var testVar = mainSplitElement1[0];
    var testVar2 = mainSplitElement1[1];

    if(eq1[2] === '-') {
        var ans1 = parseInt(eq1[0]) * parseInt(testVar) - parseInt(eq1[3]);
        console.log(colors.green(ans1));
    } else {
        var ans1 = parseInt(eq1[0]) * parseInt(testVar) + parseInt(eq1[3]);
        console.log(colors.green(ans1));
    }

    if(eq2[2] === '-') {
        var ans2 = parseInt(eq2[0]) * parseInt(testVar2) - parseInt(eq2[3]);
        console.log(colors.green(ans2));
    } else {
        var ans2 = parseInt(eq2[0]) * parseInt(testVar2) + parseInt(eq2[3]);
        console.log(colors.green(ans2));
    }
    return;
}