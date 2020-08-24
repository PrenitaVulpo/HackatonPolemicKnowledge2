/*1 - Faça um validador de cartões de créditos

Assim como CPF's, cartões de crédito também tem um padrão, que inclusive pode se usar para diferenciar a bandeira dos mesmos.

Crie um programa que valide o número de um cartão de crédito.

para verificar as bandeiras estou usando essa lista atualizada aqui:
https://gist.github.com/erikhenrique/5931368 e esta

*/

const rl = require('readline-sync');

const singleDigits = [3,4,5,6];
const singleDigitsBand = ['American Express', 'Visa', 'Mastercard', 'Discover'];
const doubleDigits = [36,38,64,65,50,35,38,60];
const doubleDigitsBand = ['Diners','Diners','Discover','Discover','Aura','JBC','Hipercard','Hipercard'];
const tripleDigits = [301,305,622];
const tripleDigitsBand = ['Diners','Diners','Discover'];
const quadrupleDigits = [5067,4576,4011,6011];
const quadrupleDigitsBand = ['Elo','Elo','Elo','Discover'];
const hextupleDigits = [636368, 636369, 438935, 504175, 451416, 636297,506699];
const hextupleDigitsBand = 'Elo';
const regex = /[^0-9]/gm;
const numLength = [13,14,15,16,19];

//5067775513063297
function checkInput(num){
    nume = num.toString();
    bool = regex.test(nume);
    if (bool === true && numLength.indexOf(nume.split("").length) != -1){
        console.log("Entrada Inválida");
        start();
    } else {
        nume = nume.split("");
        nume = nume.map(Number);
        //console.log(nume)
        band = bandeiraReturn(nume);
        valid = validador(nume);
        if (band != '') band = ", bandeira "+band;
        retorno = "Cartão "+band;
        return retorno
    }
}
//30193262948844
function validador(numi) {
    nume = numi.slice(0,-1);
    console.log(nume)
    soma = 0;
    if (nume.length%2 == 0){
        for (i = 1;i<nume.length;i+=2){
            nume[i] = nume[i]*2;
            if (nume[i] > 9) nume[i] = nume[i]- 9;
        }
    } else {
        for (i = 0;i<nume.length;i+=2){
            nume[i] = nume[i]*2;
            if (nume[i] > 9) nume[i] = nume[i]- 9;
        }
    }
    for (i = 0;i<nume.length;i++){
        soma = soma+nume[i]
    }
    soma = soma*9;
    console.log(soma%10);
    //30373136523516
    if (soma%10 == numi[numi.indexOf(numi.lenght-1)]) {
        return 'válido'
    } else {
        return 'inválido'
    }
}

function bandeiraReturn(num) {
    nume = num;
    band = '';
    pivot = 0;
    if (singleDigits.indexOf(nume[0]) != -1) band = singleDigitsBand[singleDigits.indexOf(nume[0])];
    pivot = parseInt(nume.slice(0,2).join(""));
    if (doubleDigits.indexOf(pivot) != -1){
        band = doubleDigitsBand[doubleDigits.indexOf(pivot)]};
    pivot = parseInt(nume.slice(0,3).join(""));
    if (tripleDigits.indexOf(pivot) != -1){
        band = tripleDigitsBand[tripleDigits.indexOf(pivot)]};
    pivot = parseInt(nume.slice(0,4).join(""));
    //console.log(pivot);
    if (quadrupleDigits.indexOf(pivot) != -1){
        band = quadrupleDigitsBand[quadrupleDigits.indexOf(pivot)]};
    pivot = parseInt(nume.slice(0,6).join(""));
    if (hextupleDigits.indexOf(pivot) != -1) {
        band = hextupleDigitsBand ;
    }

    return band
}

function start() {
    input = rl.question("Digite o número do cartão(somente dígitos): ");
    printar = checkInput(input);
    console.log(printar);
}

start();