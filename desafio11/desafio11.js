/*

11 - Onde está o Wally?

Crie uma função que retorne as coordenadas ([linha, col]) do elemento que difere do resto.
 */


function ondeEstaWally(arr) {
    wally = '';
    pivot = '';
    coord = ['',''];
    for (i =0;i<arr.length;i++){
        for (c =0;c<arr[i].length;c++){
            //if (wally != arr[i][c] && wally == pivot) {
                wally = arr[i][c];
                coord[0] = i;
                coord[1] = c;
            } else {
                pivot = arr[i][c];
            }
        }
    }

    console.log("wally: " +wally);
    return coord
}

function getRandomInt() {
    min = Math.ceil(2);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomInts() {
    min = Math.ceil(0);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateMatrix() {
    limit = 5;
    console.log(limit);
    arr = new Array(limit);
    wally = getRandomInts().toString();
    for (i=0;i<limit;i+=1){
        arr[i] = new Array(limit)
    }
    for (var i = 0; i < limit; i++) {
        for (var j = 0; j < limit; j++) {
            arr[i][j] = "a";
        }
    }
    arr[limit-getRandomInt()][limit-getRandomInt()] = wally;
    return arr
}


function start() {
    matrix = generateMatrix();

    console.log ("matriz gerada:" + matrix);
    console.log(ondeEstaWally(matrix))
}
 start()

