let split = function(string, spliter) {
    string += spliter;
    let r = [];
    let adder = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== spliter) {
            adder += string[i];
        }
        if (string[i] === spliter) {
            r.push(adder);
            adder = '';
        }

    }
    return r;
}


const parts = split('the:matrix:revisited', ':');
console.log(parts.length === 3);
console.log(parts[0] === 'the');
console.log(parts[1] === 'matrix');
console.log(parts[2] === 'revisited');
console.log(parts[3] === undefined);

console.log(split('banana', 'a')[0] === 'b');
console.log(split('banana', 'a')[1] === 'n');
console.log(split('banana', 'a')[2] === 'n');
console.log(split('banana', 'a')[3] === '');

const dbo = split('desenvolvimento baseado em objetos', ' ');
console.log(dbo.length === 4);
console.log(dbo[0] === 'desenvolvimento');
console.log(dbo[1] === 'baseado');
console.log(dbo[2] === 'em');
console.log(dbo[3] === 'objetos');

let input2 = document.querySelectorAll('input')[2];
let input22 = document.querySelectorAll('input')[3];
let button2 = document.querySelectorAll('button')[2];
let output2 = document.querySelectorAll('output')[2];

button2.addEventListener('click', function(evento) {
    evento.preventDefault();
    document.querySelectorAll('output')[2].innerText = split(input2.value, input22.value);
});