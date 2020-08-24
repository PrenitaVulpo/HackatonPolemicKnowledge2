/*
2 - Competição de Drones

Uma empresa irá realizar uma competição de drones. Para isso são selecionados alguns drones
com maior autonomia.

Fornecendo uma listagem de drones existentes, a quantidade de drones necessária e os IDs dos drones
que se encontram em manutenção. Retornar os IDs dos drones selecionados, ordenados conforme a
autonomia, do maior para o menor.
 */

const rl = require('readline-sync');
const drones =[{ID: 1, flightRange: 20}, {ID: 2, flightRange: 15}, {ID: 3, flightRange: 40}, {ID: 4, flightRange: 1},
{ID: 5, flightRange: 16}, {ID: 6, flightRange: 22}, {ID: 9, flightRange: 60}];
const dronesIDs = [1,2,3,4,5,6,9];
const dronesFR
const regex = /^[0-9]/g;
const regex2 = /^,/gm;

function maintenance() {
    danifEntry = rl.question("informe quais drones estão em manutenção (somente ids separados por vírgula e entre colchetes)");
    danifEntry = danifEntry.split(",");
    bool = regex.test(danifEntry);
    if (bool == true){
        console.log("entrada inválida");
        maintenance();
    } else{
        return danifEntry;
    }
}
function filtering( danif) {
    result = drones.ID.filter(function(item) {
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
    danifEntry = maintenance();
    avaliable = [];
    if (danifEntry.lenght > parseInt(nesce)){
        console.log("não será possível participar");
    } else{
        choices = filtering(danifEntry);
        for (i = 0;i<choices.lenght; i++){

        }

    }
}

start();