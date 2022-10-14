//*  Your Age
const  userAge = +prompt("Введіть ваш вік");
if (userAge > 1 || userAge == NaN) {
  if (userAge < 12) {
    console.log("Ти дитина");
  } else if (userAge < 18) {
    console.log("Ти підліток");
  } else if (userAge < 60) {
    console.log("Ти дорослий");
  } else {
    console.log("Ти пенсіонер");
  }
} else {
  alert("Мені здається, ви помилились \u{1F914}");
}

//*  Special symbol
const  userNumber = +prompt("Введіть ваше число");
switch (userNumber) {
  case 1:
    console.log("!");
    break;
  case 2:
    console.log("@");
    break;
  case 3:
    console.log("#");
    break;
  case 4:
    console.log("$");
    break;
  case 5:
    console.log("%");
    break;
  case 6:
    console.log("^");
    break;
  case 7:
    console.log("&");
    break;
  case 8:
    console.log("*");1
    break;
  case 9:
    console.log("(");
    break;
  case 0:
    console.log(")");
    break;
  default:
    console.log("Такого спецсимвола немає");
    break;
}

//* Range of numbers
const  startRange = +prompt("Enter start range");
const  finishRange = +prompt("Enter finish range");
let sum = 0;
if (startRange < finishRange) {
  for (let i = startRange; i <= finishRange; i++) {
    sum += i;
  }
  console.log(`${sum}`);
} else {
  console.log("Введіть правильний діапазон");
}

//* Common divider Трошки піддивився:) Але розумію, шо тут написано)
const firstDivider = +prompt("Enter firstDivisor");
const secondDivider = +prompt("Enter secondDivisor");
const minNumber = Math.min(firstDivider, secondDivider);
let biggestDivider = 0;
for (let i = 0; i <= minNumber; i++) {
  if (firstDivider % i === 0 && secondDivider % i === 0) {
    biggestDivider = i;
  }
}
console.log(biggestDivider);

//* divider
const userDevider = +prompt("Enter firstDivisor");
for (let i = 1; i <= userDevider; i++) {
  if (userDevider % i === 0) {
    console.log(i);
  }
}

//* Palindrom
const palindrom = prompt("Enter Palindrom");
const lengthPalindrom = palindrom.length - 1;
let isPalindrom = true;
for (let i = 0; i <= lengthPalindrom / 2; i++) {
  if (palindrom[i] !== palindrom[lengthPalindrom - i]) {
    isPalindrom = false;
  }
}
if (isPalindrom) {
  console.log(`${palindrom} is a palindrome`);
} else {
  console.log(`${palindrom} is not a palindrome`);
}

//* Order with discount
let purchasePrice = +prompt("Enter PalindrpurchasePricom");
if (purchasePrice < 200) {
  console.log("Знижки не буде");
} else if (purchasePrice <= 300) {
  console.log(
    `Сума до олпати зі знижкою 3%: ${purchasePrice - (purchasePrice * 3) / 100}`
  );
} else if (purchasePrice <= 500) {
  console.log(
    `Сума до олпати зі знижкою 5%: ${purchasePrice - (purchasePrice * 5) / 100}`
  );
} else if (purchasePrice >= 500) {
  console.log(
    `Сума до олпати зі знижкою 7%: ${purchasePrice - (purchasePrice * 7) / 100}`
  );
}

// * Type of numbers
let positiveNumbers = 0;
let negativeNumbers = 0;
let nullnumber = 0;
let evenNumbers = 0;
let oddNumbers = 0;
for (let i = 0; i < 10; i++) {
  const userNumber = +prompt("Введіть числа, які хочете перевірити");
  if (userNumber > 0) {
    positiveNumbers++;
  } else if (userNumber < 0) {
    negativeNumbers++;
  } else if (userNumber == 0) {
    nullnumber++;
  }
  if (userNumber / 2 == 0) {
    evenNumbers++;
  } else if (userNumber / 2 != 0) {
    oddNumbers++;
  }
}
console.log(
  `Кількість додатніх ${positiveNumbers}, від'ємних ${negativeNumbers}, нулів ${nullnumber}, парних ${evenNumbers}, непарних ${oddNumbers}`
);

// Days of week
let presentDay = "Monday";
let counter = 1;
let agree;
do {
  agree = confirm(`День тижня ${presentDay}. Хочеш побачити наступний день?`);
  counter++;
  switch (counter) {
    case 1:
      presentDay = "Понеділок";
      break;
    case 2:
      presentDay = "Вівторок";
      break;
    case 3:
      presentDay = "Середа";
      break;
    case 4:
      presentDay = "Четверг";
      break;
    case 5:
      presentDay = "П'ятниця";
      break;
    case 6:
      presentDay = "Субота";
      break;
    case 7:
      presentDay = "Неділя";
      break;
    default:
      counter = 1;
      presentDay = "Понедліок";
      break;
  }
} while (agree);
