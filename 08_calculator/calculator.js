const add = function(firstNum, secondNum) {
  addedNum = firstNum + secondNum;

  return addedNum;
};

const subtract = function(firstNum, secondNum) {
  subtractedNum = firstNum - secondNum;

  return subtractedNum;
};

const sum = function(numArray) {
	summedNumArray = numArray.reduce(function(total, num) {
    summed = total + num;
    return summed;
  }, 0);

  return summedNumArray;
};

const multiply = function(numArray) {
  if(numArray.length == 0) {
    return 0;
  }

  multipliedNumArray = numArray.reduce(function(total, num) {
    multiplied = total * num;
    return multiplied;
  }, 1);

  return multipliedNumArray;
};

const power = function(num, power) {
  return Math.pow(num, power)
};

const factorial = function(facNum) {
  if (facNum === 0) {
    return 1
  };

  let product = 1;
  for (let i = 1; i <= facNum; i++) {
    product *= i;
  }
  return product;
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
