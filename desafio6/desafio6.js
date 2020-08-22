/*
6 - Rimas

Crie um programa que verifica se duas frases rimam.
 */

const rl = require("readline-sync");

function checkRima2(fra1, fra2) {
    rima1 = [];
    rima2 = [];
    for (i = fra1.length-2; i < fra1.length; i++){
        rima1.push(fra1[i])
    }
    for (i = fra2.length-2; i < fra2.length; i++){
        rima2.push(fra2[i])
    }
    //console.log(rima1+" "+rima2);
    if (rima1.join() == rima2.join()) {return true} else{ return false}
}

/*function checkRima3(fra1, fra2) {
    rima1 = [];
    rima2 = [];
    for (i = fra1.length-3; i < fra1.length; i++){
        rima1.push(fra1[i])
    }
    for (i = fra2.length-3; i < fra2.length; i++){
        rima2.push(fra2[i])
    }
    console.log(rima1+" "+rima2);
    if (rima1.join() == rima2.join()) {return true} else{ return false}
}

function checkRima4(fra1, fra2) {
    rima1 = [];
    rima2 = [];
    for (i = fra1.length-4; i < fra1.length; i++){
        rima1.push(fra1[i])
    }
    for (i = fra2.length-4; i < fra2.length; i++){
        rima2.push(fra2[i])
    }
    console.log(rima1+" "+rima2);
    if (rima1.join() == rima2.join()) {return true} else{ return false}
}*/

function start() {
    frase1 = rl.question("Informe a primeira frase: ");
    frase2 = rl.question("Informe a segunda frase: ");
    if (checkRima2(frase1, frase2)==true        ) {
        console.log("Rimam");
    } else  {
        console.log("Não rimam");
    }

}
start();