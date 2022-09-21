const leapYears = function(anio) {
    if(anio % 4 == 0 && anio % 100 != 0){
        return true
    } else if (anio % 100 == 0 && anio % 400 == 0) {
        return true
    } else {
        return false
    }
};

console.log(leapYears(700))

leapYears(2000) // is a leap year: returns true
leapYears(1985)
// Do not edit below this line
module.exports = leapYears;
