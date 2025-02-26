const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
	return arr.reduce((accumulator,current) => accumulator + current);
};

const multiply = function(arr) {
  return arr.reduce((accumulator,current) => accumulator * current);
};

const power = function(num1,pwr) {
	return num1 ** pwr;
};

const factorial = function(num) {
  let total = 1;
	for (let i = 1;i <= num;i++) {
    total *= i;
  }
  return total;
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
