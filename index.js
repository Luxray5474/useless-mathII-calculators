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
console.log(('Type in your command. Type \'help\' to see all available commands.').yellow);
new function main() {
    rl.question("> " , (answer) => {
        inp = answer.split(" ");
        arg1 = ((((answer.split(", ")).slice(0, 1)).toString()).split(" ")).slice(1, 2); 
        //splits it by ", ", takes the first element e.g. "anglef 80", splits that by " ", then cuts out the first element "anglef" 
        passableInp = (arg1 + ", " + inp.slice(2)).toString();
        //adds the separated first argument to the rest of the arguments

        if(["help", "anglef", "gmean", "pythag", "sqconv", "vfdou", "vfx", "vfxy"].includes(inp[0])) {
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

            if(inp[0] == 'gmean') {
                geomean(passableInp);
                main();
                return;
            }

            if(inp[0] == 'pythag') {
                pytheorem(passableInp);
                main();
                return;
            }

            if(inp[0] == 'sqconv') {
                sqrtconvert(passableInp);
                main();
                return;
            }
        } else {
            console.log(('Invalid command! Type \'help\' to list available commands.').red);
            main();
            return;
        };
    });
};