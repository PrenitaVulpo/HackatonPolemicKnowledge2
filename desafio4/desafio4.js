

/*Crie um programa que converta centavos para reais e vice versa.
Ex: Usuário coloca que tem 275 centavos. Esse valor é convertido para R$ 2,75.

Ex 2: Usuário coloca que tem R$ 1,50. Esse valor é convertido para 150 centavos.*/

const rl = require('readline-sync');

function CtoR(i) {
    result = i/100;
    return result
}
function RtoC(i){
    result = i*100;
    return result
}

function start() {
    entry = rl.question('Digite 1 para converter centavos para real e 2 para converter' +
        ' real para centavos:');
    value = rl.question('digite o valor a ser convertido:');
    var result = 0;
    if (entry == 1){
        result = CtoR(value);
        console.log("O resultado do valor convertido é de: R$"+result);
    }else if (entry == 2){
        result = RtoC(value);
        console.log("O resultado do valor convertido é de: "+result+" centavos");
    } else {
        console.log("entrada inválida/n");
        start()
    }


}

start()

