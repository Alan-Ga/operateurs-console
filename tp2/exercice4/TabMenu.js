const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let tab = [];
menu();

function menu(){
    console.log("\n########## MENU ##########");
    console.log("1- Ajout nombre");
    console.log("2- Afficher tableau");
    console.log("q- Quitter");
    rl.question('Choisir une option ', (answer) => {
        if(answer === "q") {
            rl.close();
        }
            if (answer < 1 || answer > 2) {
            menu();
        }else {
            if (answer == 1) {
                ajout();
            }else if (answer == 2){
                affichage()
            }
        }
    });
}

function ajout(){
    rl.question('\n Veuillez saisir un nombre : ', (answer) => {
       if (isNaN(answer)){
           if(answer === "q"){
               menu();
           }else {
               console.log("/!\\ Saisissez un nombre");
               ajout();
           }
       }else{
           tab.push(answer);
           menu();
       }
    });
}

function affichage(){
    console.log("\n TAB : "+tab.toString()+"\n")
    menu();
}
