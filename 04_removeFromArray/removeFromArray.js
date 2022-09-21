const removeFromArray = function(arr, ...elementos) {
    let arrayLimpio = []
    let aEliminar = [...elementos]
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < aEliminar.length; j++){
            if (arr[i] === aEliminar[j]) {
                delete arr[i]
            }
        }
        if (arr[i] != undefined){
            arrayLimpio.push(arr[i])
        }
    }
    return arrayLimpio
};

console.log(removeFromArray([1, 2, 3, 4], 2))
// Do not edit below this line
module.exports = removeFromArray;
