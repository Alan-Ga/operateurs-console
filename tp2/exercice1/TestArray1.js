const tab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

console.log("###### TABLEAU ######");
tab.forEach( x => console.log(x));
console.log("###### TABLEAU ######\n");
console.log("###### TABLEAU INVERSE ######");
reverseTab(tab);
console.log("###### TABLEAU INVERSE ######\n");
console.log("###### TABLEAU SUP 3 ######");
affichageSup3(tab);
console.log("###### TABLEAU SUP 3 ######\n");
console.log("###### TABLEAU PAIR ######");
affichagePair(tab);
console.log("###### TABLEAU PAIR ######\n");
console.log("###### TABLEAU PLUS GRAND ######");
plusGrandTab(tab);
console.log("###### TABLEAU PLUS GRAND  ######\n");
console.log("###### TABLEAU PLUS PETIT ######");
plusPetitTab(tab);
console.log("###### TABLEAU PLUS PETIT  ######\n");



function reverseTab(tab){
    for(let i = (tab.length -1); i >= 0; i--){
        console.log(tab[i]);
    }
}

function affichageSup3(tab){
    tab.forEach( x => {
        if (x > 3){
            console.log(x);
        }
    });
}

function affichagePair(tab){
    tab.forEach( x => {
        if (x%2 === 0){
            console.log(x);
        }
    });
}

function plusGrandTab(tab){
    let number;
    tab.forEach( function(x,idx, array){
        if (!number){
            number = x;
        }else {
            if (x > number) {
                number = x;
            }
        }

        if(idx === array.length - 1){
            console.log(number);
        }
    });
}   

function plusPetitTab(tab){
    let number;
    tab.forEach( function(x,idx, array){
        if (!number){
            number = x;
        }else {
            if (x < number) {
                number = x;
            }
        }

        if(idx === array.length - 1){
            console.log(number);
        }
    });
}
