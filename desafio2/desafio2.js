/*
2 - Competição de Drones

Uma empresa irá realizar uma competição de drones. Para isso são selecionados alguns drones
com maior autonomia.

Fornecendo uma listagem de drones existentes, a quantidade de drones necessária e os IDs dos drones
que se encontram em manutenção. Retornar os IDs dos drones selecionados, ordenados conforme a
autonomia, do maior para o menor.
 */

const rl = require('readline-sync');
const drones =[{ID: 1, flightRange: 20}, {ID: 2, flightRange: 15}, {ID: 3, flightRange: 40}, {ID: 4, flightRange: 11},
{ID: 5, flightRange: 16}, {ID: 6, flightRange: 22}, {ID: 9, flightRange: 60}];
const dronesIDs = [1,2 , 3, 4, 5, 6,9];
const dronesFR = [20,15,40,11,16,22,60];
const regex = /^[0-9]/g;
const regex2 = /]/gm;

function maintenance() {
    danifEntry = rl.question("informe quais drones estão em manutenção (somente ids separados por vírgula)");
    danifEntry = danifEntry.split(",");
    danifEntry = danifEntry.map(Number);
    //danifEntry = danifEntry.filter(regex);
    bool = danifEntry.includes(regex);
    if (bool == true){
        console.log("entrada inválida");
        maintenance();
    } else{
        return danifEntry;
    }
}
function filtering( danif) {
    result = dronesIDs.filter(function(item) {
        return !danif.includes(item);
    });
    return result
}
function getRandomInt(i) {
    min = Math.ceil(0);
    max = Math.floor(i-1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function start() {
    nesce = rl.question("informe o número de drones necessários: ");
    nesce = parseInt(nesce);
    if (nesce > 7 || nesce < 1){
        console.log("entrada inválida, número de drones deve ser de 1 a 7");
        start();
    }
    danifEntry = maintenance();
    avaliable = [];
    listaFinal = [];
    danif = danifEntry.length;
    if (danif > nesce){
        console.log("não será possível participar");
    } else{
        choices = filtering(danifEntry);
        console.log("Drones disponíveis: "+choices);
        limit = choices.length;
        for (i = 0;i<nesce; i++){
            n = getRandomInt(choices.length);
            avaliable.push(dronesFR[dronesIDs.indexOf(choices[n])]);
            choices.splice(n,1);
            avaliable.sort(function(a, b){return a-b});
        }
        for (i = 0; i<nesce; i++){
            listaFinal.push(dronesIDs[dronesFR.indexOf(avaliable[i])])
        }

    }
    console.log("Drones que devem ser usados: " + listaFinal);
}

start();