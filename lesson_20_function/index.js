//* Function
//* First view
// function name(params) {

// }
//* Second view
// const MyFirstFun = function name(params) {

// }
//* Third view
// const MyFirstFun = () => {
//
// };
//! log
const log = console.log;
//* number of args
let sum = 0;
const numberOfArgs = (args = []) => {
  for (let i = 1; i <= args.length; i++) {
    sum += 1;
  }
  log(`Кількість аргументів: ${sum}`);
};
numberOfArgs([1, 2, 3, 4, 5, 'dsdd']);

//* Function -1 1 0
const twoNumber = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  }
};
log(twoNumber(2, 1));

//* Factorial
const funFactorial = (value) => {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
};
log(funFactorial(4));

//* Transform
const funTransform = (a, b, c) => {
  let sum = +('' + a + b + c);
  return sum;
};
log(funTransform(1, 2, 3));

//* Rectangle area
const funRectangleArea = (a, b) => {
  let area = 0;
  if (b) {
    area = a * b;
    return area;
  } else {
    area = a * a;
    return area;
  }
};
log(funRectangleArea(2));

//* Complete number
const funCompleteNumber = (a) => {
  let result = 0;
  for (let i = 0; i <= a / 2; i++) {
    if (a % i === 0) {
      result += i;
    }
  }
  if (a === result) {
    return true;
  } else {
    return false;
  }
};
log(funCompleteNumber(28));

//* Range
const range = (min, max) => {
  const result = {};
  for (let i = min; i < max; i++) {
    result[i] = funCompleteNumber(i);
  }
  return result;
};
log(range(2, 10));


