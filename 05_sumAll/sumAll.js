const sumAll = function(primero, ultimo) {
    let resultado = 0
    if (primero < 0 || isNaN(primero) || isNaN(ultimo) || typeof ultimo === 'string' || typeof primero === 'string') {
        return 'ERROR'
    } else if (ultimo < primero){
        for (let i = ultimo; i <= primero; i++){
            resultado += i
        }
    } else {
        for (let i = primero; i <= ultimo; i++){
            resultado += i
        }
    }
    
    return resultado
};
console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;
