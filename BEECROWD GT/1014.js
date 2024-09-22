const input = require('fs').readFileSync('data/1014.txt', 'utf8');
const lines = input.split('\r\n');

let X = parseInt(lines[0])
let Y = parseFloat(lines[1])

const consumption = X / Y

console.log(`${consumption.toFixed(3)} km/l`)