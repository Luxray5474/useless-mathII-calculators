const colors = require("colors");
export default function calc(input) {
    console.log(("Enter the decimal and radical form you want to prove equal.\n").yellow + ("[decimal form], [radical form]\n").yellow);
    inp = input.split(" ");
    sqrt = inp[1].split(" ");
    anssqrt = (sqrt[0] * (Math.sqrt(sqrt[1])));
    console.log(sqrt[0] + "√" + sqrt[1] + " = " + anssqrt);
    if((anssqrt) == (ans[0])) {
        console.log(("They match.").green);
    } else {
        console.log(("They do not match.").red);
    }
    return ans;
}
  
new function sqrtprove() {
    rl.question(("Enter the decimal and radical form you want to prove equal.\n").yellow + ("[decimal form], [radical form]\n").gray, (answer) => {
        ans = answer.split(", ");
        sqrt = ans[1].split(" ");
        anssqrt = (sqrt[0] * (Math.sqrt(sqrt[1])));
        console.log(sqrt[0] + "√" + sqrt[1] + " = " + anssqrt);
        if((anssqrt) == (ans[0])) {
            console.log(("They match.").green);
        } else {
            console.log(("They do not match.").red);
        }
        sqrtprove();
        return;
    })
}