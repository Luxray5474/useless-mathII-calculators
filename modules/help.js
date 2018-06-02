const colors = require('colors');

module.exports = function help() {
    console.log(('Command Help:').yellow);
    console.log(('help').bgYellow.black);
    console.log(('  Shows command help and how to use each one.'));
    console.log(('anglef').bgYellow.black);
    console.log(('  Finds an angle given two known angles.'));
    console.log(('  [angle1], [angle2]').gray);
    console.log(('gmean').bgYellow.black);
    console.log(('  Finds the geometrical mean given two numbers.'));
    console.log(('  [n1], [n2]').gray);
    console.log(('pythag').bgYellow.black);
    console.log(('  Finds the hypotenuse given two legs.'));
    console.log(('  [leg1], [leg2]').gray);
    console.log(('sqconv').bgYellow.black);
    console.log(('  Converts a square root from its radical form to its decimal form.'));
    console.log(('  [multiplicant], [radical]').gray);
    console.log(('vfdou').bgYellow.black);
    console.log(('  [n x ± n], [n y ± n], [x], [y]').gray);
    console.log(('vfx').bgYellow.black);
    console.log(('  [n x ± n], [n x ± n], [x]').gray);
    console.log(('vfxy').bgYellow.black);
    console.log(('  [n x ± n y], [n x ± n y], [x], [y]').gray);
};