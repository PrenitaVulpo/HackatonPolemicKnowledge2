/*
 - Formatação de Telefone

Crie um programa que pegue o número de telefone e formate-o.

Ex: é inserido o número 4494532345. O número é então convertido para: (44) 9453-2345

Obs: Lembre-se do DDD e de que celulares tem 1 número a mais que telefones fixos.
 */

const rl = require("readline-sync");

function formatFixo(num) {
    ddd =['(',num[0],num[1],')'];
    part1 = [];
    part2 = [];
    for (i = 0; i<4;i++){
        part1.push(num[i+2]);
        part2.push(num[i+6]);
    }
    result = ddd.join("") + part1.join("") + "-" + part2.join("");
    return result;
}

function formatCelular(num) {
    ddd =['(',num[0],num[1],')'];
    part1 = [];
    part2 = [];
    for (i = 0; i<5;i++){
        part1.push(num[i+2]);
    }
    for (i = 0; i<4;i++){
        part2.push(num[i+7]);
    }
    result = ddd.join("") + part1.join("") + "-" + part2.join("");
    return result;
}

function start() {
    numero = rl.question("informe o número a ser formatado: ");
    if (numero.length == 10){
        res = formatFixo(numero);
        console.log("número formatado: " + res);
    } else if (numero.length == 11){
        res = formatCelular(numero);
        console.log("número formatado: " + res);
    } else{
        console.log("entrada inválida");
        start()
    }
}

start()