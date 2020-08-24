/*

11 - Onde está o Wally?

Crie uma função que retorne as coordenadas ([linha, col]) do elemento que difere do resto.
 */


function ondeEstaWally(arr) {
    wally = '';
    coord = [];
    for (i =0;i<arr.length;i++){
        for (c =0;c<arr[i].length){
            if (wally != arr[i,c]) wally = arr[i,c]
        }
    }
    for (i =0;i<arr.length;i++){
        for (c =0;c<arr[i].length){
            if (wally == arr[i,c]) coord.push(i);
            if (wally == arr[i,c]) coord.push(c);
        }
    }
    return coord
}


