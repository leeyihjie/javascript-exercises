const convertToCelsius = function(fahTemp) {
  var convCelTemp = ((fahTemp - 32) * (5 / 9)).toFixed(1);
  console.log("Fah to Cel: " + parseFloat(convCelTemp))
  return parseFloat(convCelTemp);
};

const convertToFahrenheit = function(celTemp) {
  var convFahTemp = (celTemp * (9 / 5) + 32).toFixed(1);
  console.log("Cel to Fah: " + parseFloat(convFahTemp))
  return parseFloat(convFahTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
