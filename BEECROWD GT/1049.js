var input = require('fs').readFileSync('data/1049.txt', 'utf8');
var lines = input.split('\r\n');

let requisitoVertebra = lines[0]
let requisitoClasse = lines[1]
let requisitoAlimentacao = lines[2]

//verificando o tipo do animal, referente a presenca de coluna
if (requisitoVertebra === 'vertebrado') {
    //verificando se a classe do vertebrado- | mamifero
    if (requisitoClasse === 'mamifero') {
        if (requisitoAlimentacao === 'onivoro') {
            console.log(`Homem`)
        } else {
            console.log(`vaca`)
        }
        //verificando se a classe do animal e uma ave
    } else {
        //verificando o tipo de alimentacao 
        if (requisitoAlimentacao === 'carnivoro') {
            console.log(`aguia`)
        } else {
            console.log(`pomba`)
        }
    }
    //verificando se o animal e um invertebrado
} else {
    //verificando a classe do invertebrado | inseto 
    if (requisitoClasse === 'inseto') {
        if (requisitoAlimentacao === 'herbivoro') {
            console.log(`lagarta`)
        } else {
            console.log(`pulga`)
        }
        //verificando a classe do invertebrado | anelidio
    } else {
        if (requisitoAlimentacao === 'onivoro') {
            console.log(`minhoca`)
        } else {
            console.log(`sanguessuga`)
        }
    }
}
console.log()