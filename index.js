//npm modules
const readline = require('readline');
const colors = require('colors');

//local modules
const anglefind = require('./modules/anglefind.js');
const geomean = require('./modules/geomean.js');
const pytheorem = require('./modules/pytheorem.js');
const sqrtconvert = require('./modules/sqrtconvert.js');
const varfinddou = require('./modules/varfinddou.js');
const varfindx = require('./modules/varfindx.js');
const varfindxy = require('./modules/varfindxy.js');
const help = require('./modules/help.js');

//that JSON with the stuff in it

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

new function main() {
    rl.question(('Type in your command. Type \'help\' to see all available commands. \n').yellow , (answer) => {
        inp = answer.split(" ");
        arg1 = ((((answer.split(", ")).slice(0, 1)).toString()).split(" ")).slice(1, 2);
        passableInp = (arg1 + ", " + inp.slice(2)).toString();

        if(inp[0] == 'help') {
            help();
            main();
            return;
        }

        if(inp[0] == 'anglef') {
            anglefind(passableInp);
            main();
            return;
        }
    });
};