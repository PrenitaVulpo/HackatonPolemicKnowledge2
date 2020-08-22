/*
8 - Ordenar alturas

Escreva um programa que receba diversas alturas e ordene-as.
 */

const rl = require('readline-sync');
const chars = /^[0-9]/;
var input =[];


function empurra(value){

    input.push(parseFloat(value));
}
function exec() {
    menu = rl.question("digite 1 para informar uma altura e 2 para encerrar: ");

    if (menu == 1) {
        height = rl.question("informe um valor de altura: ");
        if (chars.test(height) == false) {
            console.log("entrada inválida");
        } else {
            empurra(height.replace(",", "."));
        }
        exec()
    } else if (menu == 2) {
        input.sort(function(a, b){return a-b});
        console.log("valores ordenados: " + input);
    } else {
        console.log("entrada inválida");
        start()
    }
}

function start() {
    exec();
}

start();
