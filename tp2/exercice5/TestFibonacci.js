const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
init();

function init() {
    rl.question('Veuillez saisir un nombre ? ', (answer) => {
        if (isNaN(answer) && answer > 0) {
            init();
        } else {
            rl.close();
            fibo(answer);
        }
    });
}

function fibo(nombre){
    let nombre1 = 0;
    let nombre2 = 1;
    console.log("F(0):0");
    console.log("F(1):1");
    for(let i = 2; i <= nombre; i++){
        console.log("F("+i+"):"+(nombre1+nombre2));
        const nombre3 = nombre2;
        nombre2 += nombre1;
        nombre1 = nombre3
    }
}
