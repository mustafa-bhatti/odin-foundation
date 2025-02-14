const convertToCelsius = function(tempFahrenheit) {
  tempFahrenheit= ((tempFahrenheit - 32) * (5/9));
  if (Number.isInteger(tempFahrenheit)) {
    // console.log("testing");
    return +tempFahrenheit;
  }
  return +tempFahrenheit.toFixed(1);
};

const convertToFahrenheit = function(tempCelsius) {
  tempCelsius= (tempCelsius * (9/5) + 32);
  if (Number.isInteger(tempCelsius)) {
    // console.log("testing");
    return +tempCelsius;
  }
  return +tempCelsius.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
