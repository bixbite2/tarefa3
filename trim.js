let trimLeft = function(string) {
    let r = '';
    let flag = false;
    for (let i = 0; i < string.length; i++) {
        checker = string[i];
        /*
        if (i < string.length / 2) {
            if (checker === String.fromCharCode(13) || checker === String.fromCharCode(10) || checker === String.fromCharCode(9)) {
                i++;
                checker = string[i];
            }
        */
        if ((checker !== ' ' && (checker.charCodeAt(0) > 13)) || (flag)) {
            r += checker;
            flag = true;
        }
    }
    return r;
}

let trimRight = function(string) {
    let r = '';
    let flag = false;
    for (let i = string.length - 1; i >= 0; i--) {
        checker = string[i];
        /*
        if (i > string.length / 2) {
            if (checker === String.fromCharCode(13) || checker === String.fromCharCode(10) || checker === String.fromCharCode(9)) {
                i--;
                checker = string[i];
            }
        }
        */
        if ((checker !== ' ' && (checker.charCodeAt(0) > 13)) || (flag)) {
            r = checker + r;
            flag = true;
        }
    }
    return r;
};

let trim = function trim(string) {
    let r = '';
    r = trimLeft(string);
    r = trimRight(r);
    return r;
}

// aparar String à esquerda: remover espaços à esquerda da String
console.assert(trimLeft('    abc  ') === 'abc  ');
console.assert(trimLeft('    com espaco  ') === 'com espaco  ');
console.assert(trimLeft('\r \n \t com carriage return, line feed, tab e espaco  \n') === 'com carriage return, line feed, tab e espaco  \n');

// aparar String à direita: remover espaços à direita da String
console.assert(trimRight('    abc  ') === '    abc');
console.assert(trimRight('    abc \r \n \t ') === '    abc');

// aparar String em ambos lados
console.assert(trim('    abc  ') === 'abc');
console.assert(trim('\n \r\t      abc\n\r \t        ') === 'abc');
console.assert(trim('\n \r\t      com espaco\n\r \t        ') === 'com espaco');

// situações excepcionais
console.assert(trimLeft('') === '');
console.assert(trimRight('') === '');
console.assert(trim('') === '');
console.assert(trimLeft('   \n\t\r  \n\r ') === '');
console.assert(trimRight('   \n\t\r  \n\r ') === '');
console.assert(trim('   \n\t\r  \n\r ') === '');
console.assert(trim('                                                                  a                                                                                       ') === 'a');

let input = document.querySelectorAll('input')[0];
let button = document.querySelectorAll('button')[0];
let output = document.querySelectorAll('output')[0];

button.addEventListener('click', function(evento) {
    evento.preventDefault();
    document.querySelectorAll('output')[0].innerText = trim(input.value);
});