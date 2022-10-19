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
const NumberOfArgs = (args = []) => {
  for (let i = 1; i <= args.length; i++) {
    sum += 1;
  }
  log(`Кількість аргументів: ${sum}`);
};
NumberOfArgs([1, 2, 3, 4, 5, "dsdd"]);

//* Function -1 1 0
const TwoNumber = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  }
};
log(TwoNumber(2, 1));

//* Factorial
const FunFactorial = (value) => {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
};
log(FunFactorial(4));

//* Transform
const FunTransform = (a, b, c) => {
  let sum = +("" + a + b + c);
  return sum;
};
log(FunTransform(1, 2, 3));

//* Rectangle area
const FunRectangleArea = (a, b) => {
  let area = 0;
  if (b) {
    area = a * b;
    return area;
  } else {
    area = a * a;
    return area;
  }
};
log(FunRectangleArea(2));

//* Complete number
const FunCompleteNumber = (a) => {
  let result = 0;
  for (let i = 0; i < a; i++) {
    if (a % i == 0) {
      result += i;
    }
  }
  if (a == result) {
    log("Yes");
  } else {
    log("No");
  }
};
log(FunCompleteNumber(28));

//* Diapason
const FunDiapason = (min, max) => {
  for (let i = min; i < max; i++) {
    const element = array[i];
  }
};
