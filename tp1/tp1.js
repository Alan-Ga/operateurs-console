const readline = require('readline');


console.log("***** Application Opérateurs *****");


let number1;
let number2;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
question();


function calcul(number1, number2){
    console.log(number1 + "+" + number2 + "=" + number1+number2);
    console.log(number1 + "-" + number2 + "=" + (number1-number2) );
    console.log(number1 + "*" + number2 + "=" + number1*number2);
    console.log(number1 + "/" + number2 + "=" + number1/number2);
    console.log(number1 + "%" + number2 + "=" + number1%number2);
}

function question(){
    rl.question('Veuillez saisir le premier nombre ? ', (answer) => {
        if (isNaN(answer)) {
            question();
        } else {
            number1 = answer;
            question2();
        }
    });
}

function question2(){
    rl.question('Veuillez saisir le second nombre ? ', (answer) => {
        if (isNaN(answer)) {
            question2();
        } else {
            number2 = answer;
            calcul(number1,number2);
            rl.close();
        }
    });
}






