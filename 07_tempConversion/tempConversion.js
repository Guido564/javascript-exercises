const ftoc = function(fahrenheit) {
  c = (fahrenheit - 32) / 1.8
    return Math.round(c * 10) / 10
};

const ctof = function(celsius) {
  f = celsius * 1.8 + 32
  return Math.round(f * 10) / 10
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
