const reverseString = function(str) {
    let strAlReverso = ''
    for (let i = str.length - 1; i >= 0; i--) {
        strAlReverso += str[i]
    }
    return strAlReverso
};

console.log(reverseString('hola como estas?'))

// Do not edit below this line
module.exports = reverseString;
