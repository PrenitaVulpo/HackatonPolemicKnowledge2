/*
3 - STOP
Stop é uma brincadeira onde devemos escolher uma letra e preencher palavras em diversos temas com essa letra.


Crie um programa que permita jogar esse jogo.
 */

const rl = require("readline-sync");
const letterTable = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var listaFinal = [];

function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(25);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validador(l, inp) {
    if (l == inp[0].toLowerCase()){
        return true
    } else {
        return false
    }
}

function checagem(l, ent, ans) {
    if (validador(l, ent) == true && ent.length!=1){
        return ent
    } else{
        ans2 = rl.question("entrada inválida, informe uma "+ans+" que comece com a letra "+l+": ");
        checagem(l, ent, ans2);
    }
}


function start() {
    letter = letterTable[getRandomInt()];
    answers =['letra','cidade','animal','profissão','fruta','cor','país'];
    respostas = [];
    console.log("A letra sorteada foi: "+letter);
    for (i = 0; i<6;i++){
        entrada = rl.question("Informe uma "+answers[i+1]+" " +
            "que comece com a letra "+letter+": ");
        respostas[i] = checagem(letter, entrada, answers[i+1]);
    }
    resp = [answers[0]+": "+letter, answers[1]+": "+respostas[0],answers[2]+": "+respostas[1],
        answers[3]+": "+respostas[2],answers[4]+": "+respostas[3],
        answers[5]+": "+respostas[4],answers[6]+": "+respostas[5]];
    listaFinal.push(resp);

    continuar = rl.question("Quer continuar jogando (digite 1), parar(digite2), ou ver " +
        "as respostas atuais (digite qualuqer outra coisa)?");
    switch (parseInt(continuar)) {
        case 1:
            start();
            break;
        case 2:
            console.log("O resultado final foi: ");
            for (i = 0;i<listaFinal.length; i++){
                console.log(listaFinal[i].join());
            } ;
            break;
        default:
            console.log("O resultado atual é: "+listaFinal);
            for (i = 0;i<listaFinal.length; i++){
                console.log(listaFinal[i].join());
            } ;
            start();
    }

}

start();