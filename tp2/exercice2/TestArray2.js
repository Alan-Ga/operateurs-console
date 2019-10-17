const tab =[1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

moyenne(tab);
index(tab);
doublon(tab);

function moyenne(tab){
    let total = 0;
    for (let i = 0;i < tab.length;i++){
        total += tab[i];
    }
    console.log("Moyenne :" + (total / tab.length));
}

function index(tab){
    tab.forEach(function(x,xid) {
        if (x === 15){
            console.log("Index de 15 = "+xid);
        }
    });
}

function doublon(tab){
    let doublon = [];
    for (let i = 0;i < tab.length;i++){
        if (!doublon.includes(tab[i])) {
            for (let y = i+1; y < tab.length; y++) {
                if (tab[i] === tab[y]) {
                    doublon.push(tab[i])
                }
            }
        }
    }
    console.log("Doublon : "+doublon.toString());
}
