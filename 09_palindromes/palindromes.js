const palindromes = function (str) {
    let strAlReverso = ''
    for (let i = str.length - 1; i >= 0; i--) {
        strAlReverso += str[i]
    }
    let comparacion1 = str.toLowerCase().split(' ').join('').split(',').join('').split(',').join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    let comparacion2 = strAlReverso.toLowerCase().split(' ').join('').split(',').join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    return comparacion1 == comparacion2
};

// Do not edit below this line
module.exports = palindromes;
