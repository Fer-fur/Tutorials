const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
    return num1-num2
};

const sum = function(array) {
  //check for empty array
  if(array.length === 0) {
    return 0
  }
	return array.reduce((accumulator, curVal) => accumulator + curVal)
};

const multiply = function(array) {
  //check for empty array
  if(array.length === 0) {
    return 0
  }
	return array.reduce((accumulator, curVal) => accumulator * curVal)
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	if(!num) {
    return 1
  }

  let total = 1;
  for( let i = num; i > 0; i--) {
    if((i-1) != 0){
      total *= i
    }
  }
  return total
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