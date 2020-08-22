/*
10 - Substitua as letras pela posição no alfabeto

Crie uma função que pegue uma string e substitua cada letra por sua posição apropriada no alfabeto.

EX: "a" é 1, "b" é 2, "c" é 3, etc, etc.
 */

const letterTable = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const regex = /[0-9]/;
const rl = require("readline-sync");

function letterSwap(phrase) {
    phrase2 = phrase.toLowerCase();
    result = [];
    for (i = 0; i<phrase2.length; i++){
        char = phrase2[i];
        if (regex.test(char)){
            result.push(char);
        } else {
            result.push(letterTable.indexOf(char));
        }
    }
    res = result.join("");
    return res;
}

function start() {
    input = rl.question("informe uma frase: ");
    output = letterSwap(input);
    console.log("frase com as letras substituídas: "+output);
}

start()