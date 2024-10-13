const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((product, num) => {
    return product * num;
  }, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  const array = [];
  for (i = num; i > 0; i--) {
    array.push(i);
  }
	return array.reduce((product, num) => {
    return product * num;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
