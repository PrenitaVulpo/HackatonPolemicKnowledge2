/*
9 - Validador de números primos

Faça um programa que receba um número e verifique se ele é primo ou não.
 */


const rl = require('readline-sync');


function verificador(num) {
    if (typeof parseInt(num) != "number"){
        console.log("entrada inválida");
        start();
    } else {
        return primo(num)
    }
}

function primo(num) {
    listPrimos = [2,3,5,7];
    divisores = 0;
    if (listPrimos.includes(num)){
        return true
    }else{
        listPrimos.push(num);
        for (i = 0; i < listPrimos.length; i ++){
            if (num%listPrimos[i]==0){
                divisores++
            }
        }
    }
    if (divisores <2) {
        return true
    } else {
        return false
    }

}

function start() {
    num = rl.question("informe o número a ser verificado: ")
    if (verificador(num) ==true){
        console.log("primo")
    } else {
        console.log("não primo")
    }
}

start();