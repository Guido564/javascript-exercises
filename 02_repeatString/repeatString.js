const repeatString = function(str, num) {
    if (num >= 0) {
        let repeticion = ''
        for (let i = 0; i < num; i++){
            repeticion += str
        }
        return repeticion
    } else {
        return 'ERROR'
    }
    
};
console.log(repeatString('hey', -19))
// Do not edit below this line
module.exports = repeatString;
