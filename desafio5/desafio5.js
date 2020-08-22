/*
5 - Verificador de senha
Ter uma senha forte é algo mais que necessário para manter sua privacidade e segurança.
Mas como saber se sua senha é realmente segura?

Crie um programa que receba uma senha e informa se ela é fraca, média ou forte.
 */

const rl = require('readline-sync');

const charsLowerCase = /[a-z]/m;
const charsUpperCase = /[A-Z]/m;
const nums = /[0-9]/m;
const special = /^[0-9a-zA-Z]/m;
const regexTrain = [charsLowerCase, charsUpperCase, nums, special];

function testagem(senha){
    result =0;
    for (i = 0; i < 4; i++){
        if ( regexTrain[i].test(senha) == true){
            result ++;
        }
    }
    return result
}

function aval(i){
    switch (parseInt(i)) {
        case 4:
            text = "forte";
            break;
        case 3:
            text = "média";
            break;
        default:
            text = "fraca";

    }
    return text
}

function start() {
    senha = rl.question('Informe uma senha com no mínimo 8 caracteres: ');
    if (senha.length > 7){
        count = testagem(senha);
        message = aval(count);
        console.log("A sua senha é "+message);
    } else {
        console.log("senha inválida");
        start()
    }
}

start();