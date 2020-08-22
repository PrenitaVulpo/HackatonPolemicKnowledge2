/*12 - H4ck3r Sp34k

  Crie uma função que recebe uma string como entrada e retorna uma versão codificada (l1ngu4g3m d3 h4ck3r) da string.

  Exemplos:

  hackerSpeak("javascript é legal") ➞ "j4v45cr1pt 3 l3g4l"

  hackerSpeak("gosto de programar") ➞ "g0st0 d3 pr0gr4m4r"

  hackerSpeak("be polemic") ➞ "b3 p0l3m1c"

 */

const rl = require('readline-sync');

function swapChars(str){
    res = str;

    res = res.replace(/a/gm,'4');
    res = res.replace(/A/gm,'4');
    res = res.replace(/e/gm,'3');
    res = res.replace(/E/gm,'4');
    res = res.replace(/i/gm,'1');
    res = res.replace(/I/gm,'4');
    res = res.replace(/o/gm,'0');
    res = res.replace(/O/gm,'4');

    return res;
}


function start() {
    input = rl.question("informe a string a ser convertida: ");
    result = swapChars(input);
    console.log("string convertida: "+result)
}

start();
