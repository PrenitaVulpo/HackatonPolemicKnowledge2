/*1 - Faça um validador de cartões de créditos

Assim como CPF's, cartões de crédito também tem um padrão, que inclusive pode se usar para diferenciar a bandeira dos mesmos.

Crie um programa que valide o número de um cartão de crédito.

para verificar as bandeiras estou usando essa lista atualizada aqui:
https://gist.github.com/erikhenrique/5931368 e esta

*/

const rl = require('readline-sync');

const singleDigits = [3,4,5,6]  ;
const singleDigitsBand = ['American Express', 'Visa', 'Mastercard', 'Discover'];
const doubleDigits = [36,38,64,65,50,35,38,60];
const doubleDigitsBand = ['Diners','Diners','Discover','Discover','Aura','JBC','Hipercard','Hipercard'];
const tripleDigits = [301,305,622];
const tripleDigitsBand = ['Diners','Diners','Discover'];
const quadrupleDigits = [5067,4576,4011,6011];
const quadrupleDigitsBand = ['Elo','Elo','Elo','Discover'];
const hextupleDigits = [636368, 636369, 438935, 504175, 451416, 636297,506699];
const hextupleDigitsBand = 'Elo';
const regex = /^[0-9]/g;
const numLenght = [13,14,15,16,19];


function checkInput(num){
    nume = num.toString();
    if (regex.test(nume) === true &&
        nume.split(",").lenght == 16){
        console.log("Entrada Inválida");
        start();
    } else {
        valid = validador(nume);
        band = bandeiraReturn(nume);
        if (band != '.') band = ", bandeira"+band+".";
        retorno = "Cartão "+valid+band;
        return retorno
    }
}

function validador(num) {
    nume = num.split(",");
    soma = 0;
    if (nume.length%2 == 0){
        for (i = 1;i<nume.length;i+2){
            nume[i] = nume[i]*2;
            if (nume[i] > 9) nume[i] = nume[i]- 9;
        }
    } else {
        for (i = 0;i<nume.length;i+2){
            nume[i] = nume[i]*2;
            if (nume[i] > 9) nume[i] = nume[i]- 9;
        }
    }
    for (i = 0;i<nume.length;i++){
        soma = soma+num[i]
    }
    if (soma*9%10 == num.lastIndex) {
        return 'válido'
    } else {
        return 'inválido'
    }
}

function bandeiraReturn(num) {
    num = num.split(",");
    band = '.';
    if (singleDigits.indexOf(num[0])) band = singleDigitsBand[num[0]]+'.';
    if (doubleDigits.indexOf(num[0])) band = doubleDigitsBand[num[0]]+'.';
    if (tripleDigits.indexOf(num[0])) band = tripleDigitsBand[num[0]]+'.';
    if (quadrupleDigits.indexOf(num[0])) band = quadrupleDigitsBand[num[0]]+'.';
    if (hextupleDigits.indexOf(num[0])) band = hextupleDigitsBand[num[0]]+'.';

    return band
}

function start() {
    input = rl.question("Digite o número do cartão(somente dígitos): ");
    printar = checkInput(input);
    console.log(printar);
}

start();