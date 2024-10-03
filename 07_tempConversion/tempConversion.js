const convertToCelsius = function(f) {
  let c = (f - 32) * 5 / 9;
  if (Number.isInteger(c) === true) {
    return Number(c.toFixed(0));
  } else {
    return Number(c.toFixed(1));
  }
};

const convertToFahrenheit = function(c) {
  let f = c * (9/5) + 32;
  if (Number.isInteger(f) === true) {
    return Number(f.toFixed(0));
  } else {
    return Number(f.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
