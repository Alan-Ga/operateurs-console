const tab =[1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
trie(tab);

function trie(tab){
    let tabTrie = [];
    for (i= 0; i < tab.length;i++){
        if(tabTrie.length === 0){
            tabTrie.push(tab[i])
        }else{
            let index = -1;
            for (y = 0; y < tabTrie.length; y++){
                if (tab[i] < tabTrie[y]){
                    index = y;
                    break;
                }
            }
            if (index === -1){
                tabTrie.push(tab[i]);
            }else{
                tabTrie.splice(index,0,tab[i]);
            }
        }
    }
    console.log("Tableau Trié :"+ tabTrie.toString());
}
