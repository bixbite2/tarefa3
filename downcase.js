let downcase = function(string) {
    let r = '';
    for (let i = 0; i < string.length; i++) {
        let checker = string[i];
        if (checker.charCodeAt(0) >= 65 && checker.charCodeAt(0) <= 90) {
            r += String.fromCharCode(checker.charCodeAt(0) + 32);
        } else if (checker.charCodeAt(0) >= 97 && checker.charCodeAt(0) <= 122) {
            r += checker;
        } else if (checker.charCodeAt(0) >= 192 && checker.charCodeAt(0) <= 221) {
            r += String.fromCharCode(checker.charCodeAt(0) + 32);
        } else {
            r += checker;
        }
    }
    return r;
}

console.log(downcase('TESTE') === 'teste');
console.log(downcase('Teste') === 'teste');
console.log(downcase('T$% 12TR') === 't$% 12tr');
console.log(downcase('CURSO TÉCNICO EM INFORMÁTICA PARA INTERNET') === 'curso técnico em informática para internet');
console.log(downcase('Grande Área: CIÊNCIA DA COMPUTAÇÃO') === 'grande área: ciência da computação');

let input1 = document.querySelectorAll('input')[1];
let button1 = document.querySelectorAll('button')[1];
let output1 = document.querySelectorAll('output')[1];

button1.addEventListener('click', function(evento) {
    evento.preventDefault();
    document.querySelectorAll('output')[1].innerText = downcase(input1.value);
});