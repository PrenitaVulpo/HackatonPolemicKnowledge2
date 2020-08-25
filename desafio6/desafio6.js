/*
6 - Rimas

Crie um programa que verifica se duas frases rimam.


 */

const rl = require("readline-sync");
//const { exec } = require("child_process");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

function getLastWord(str) {
    espaco = str.lastIndexOf(' ');
    if (espaco == -1){
    retorno = str.slice(espaco+1, str.lastIndex);
    } else{
      retorno = str;
    }
    console.log(retorno);

    return retorno
}


async function checkRima(f1,f2) {
    //console.log("checando rima")
    fra1 = await getPhonetics(f1);
    //console.log(fra1);
    fra2 = await getPhonetics(f2);
    //console.log(fra2);
    result = await checkRima2(fra1,fra2);
    console.log(result);
    //return result
}

async function getPhonetics(str) {
    const { stdout, stderr } = await exec("python test_word.py -s silva -w "+str);
    console.log('stdout:', stdout);
    //console.error('stderr:', stderr);
    retorno = stdout.slice(stdout.indexOf("[")+1, stdout.indexOf("]"));
    return retorno
}

function checkRima2(fra1, fra2) {
    rima1 = [];
    rima2 = [];
    for (i = fra1.length-2; i < fra1.length; i++){
        rima1.push(fra1[i])
    }
    for (i = fra2.length-2; i < fra2.length; i++){
        rima2.push(fra2[i])
    }
    console.log(rima1+" "+rima2);
    if (rima1.join() == rima2.join()) {return "Rimam"} else{ return "Não rimam"}
}

function getFrase1(){
    frase1 = rl.question("Informe a primeira frase (max 200 caracteres): ");
    switch (true) {
        case (frase1.length>200):
            console.log("Frase muito grande");
            getFrase1();
            break;
        case (frase1.length<2):
            console.log("Digite ao menos uma palavra");
            getFrase1();
            break;
        default:
            return frase1;
    }

}

function getFrase2(){
    frase2 = rl.question("Informe a segunda frase(max 200 caracteres): ");
    switch (true) {
        case (frase2.length>200):
            console.log("Frase muito grande");
            getFrase2();
            break;
        case (frase2.length<2):
            console.log("Digite ao menos uma palavra");
            getFrase2();
            break;
        default:
            return frase2;
    }

}


function start() {
    //getPhonetics("pato")
    //checkRima('pente', 'mente')

    frase1 = getFrase1();
    frase2 = getFrase2();

    palavra1 = getLastWord(frase1);
    palavra2 = getLastWord(frase2);

    checkRima(palavra1, palavra2);

}
start();