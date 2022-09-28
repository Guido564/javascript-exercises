const findTheOldest = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].yearOfDeath == undefined) {
            arr[i].yearOfDeath = 2022
        }
    }

    const oldest = arr.sort(function(a, b) {
        const anterior = a.yearOfDeath - a.yearOfBirth
        const posterior = b.yearOfDeath - b.yearOfBirth
        return posterior - anterior;
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
