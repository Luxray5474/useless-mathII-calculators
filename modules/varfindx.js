const colors = require('colors');

module.exports = function calc(input) {
    var mainsplit = input.split(",,");
    var eq1 = mainsplit[1].split(",");
    var eq2 = mainsplit[2].split(",");
    var testvar = mainsplit[0];
    console.log(mainsplit + " | " + eq1 + " | " + eq2 + " | " + testvar);

    if(eq1[2] === '-') {
        var ans1 = parseInt(eq1[0]) * parseInt(testvar) - parseInt(eq1[3]);
        console.log("x ".blue + "result: " + colors.green(ans1));
    } else {
        var ans1 = parseInt(eq1[0]) * parseInt(testvar) + parseInt(eq1[3]);
        console.log("x ".blue + "result: " + colors.green(ans1));
    }

    if(eq2[2] === '-') {
        var ans2 = parseInt(eq2[0]) * parseInt(testvar) - parseInt(eq2[3]);
        console.log("y ".red + "result: " + colors.green(ans2));
    } else {
        var ans2 = parseInt(eq2[0]) * parseInt(testvar) + parseInt(eq2[3]);
        console.log("y ".red + "result: " + colors.green(ans2));
    }
    return;
}