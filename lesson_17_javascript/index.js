// Правильні назви зміних
//* Тут мають бути const, тому що я своє прізвіще та ім'я не буду міняти)

// const firstNameLastName = 2;
// const userName = 1;
// const name = 1;
// const first_last_name = 1;
// const PI = 3.14; // - так можна називати глобальні зміні

//! Так не можна називати зміні))

// let NAME
// let FIRSTNAME-LastNAME
// let MyName - так називаються класи)
// let 1name2name
/* let let || const const */

// Question what is your name
let userYear = confirm("Вам є 18 років?");
// Аge verification
if (userYear == true) {
  // Your Name
  let userName = prompt("Як Вас звати?");
  alert(`Привіт, ${userName}`);
  alert(`Всі інші відповіді будуть в консолі \u{1F603}`);

  //  Your age
  let user_birth_date = prompt("Ваша дата народження?");
  const current_year = 2022;
  console.log(`Ваш вік:${current_year - user_birth_date}`);

  // Perimetr of square
  let length_square = prompt("Введіть довжину сторони квадрату?");
  console.log(`Периметр квадрата:${length_square * 4}`);

  // Radius circle
  let radius_circle = prompt("Введіть радіус кола?");
  const PI = 3.14;

  // circle area
  console.log(`Площа круга:${PI * Math.pow(radius_circle, 2)} м²`);

  // Your speed
  let city_distance = prompt("Введіть відстань між містами");
  let time = prompt("Введіть час в дорозі");
  console.log(`Швидкість:${city_distance / time} км/год`);

  // Your dollar amount
  let dollars = prompt("Введіть кільскість доларів?");
  const crossEuro = 1.1;
  console.log(`Кількість євро:${dollars * crossEuro} €`);
} else {
  alert("Ви повинні бути старше 18 років");
}
