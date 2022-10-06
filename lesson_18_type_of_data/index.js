// Result 0.1 + 0.2
const NUM1 = 0.1;
const NUM2 = 0.2;
console.log(`Result: ${(NUM1 + NUM2).toFixed(1)}`);

// Result string -"1" + number - 2
console.log(`Result ${+"1" + 2}`);

// Files of 820 MB will fit on a flash drive
let capacity_flash = +prompt("Enter the size of your flash drive?");
let capacity = (capacity_flash * 1024) / 820;
console.log(
  `Files of 820 MB will fit on a flash drive: ${capacity.toFixed(0)}`
);

// Number chocolates and your balance
let user_money = +prompt("Enter your money amount");
let price_chocolate = +prompt("Enter price chocolate");
console.log(
  `Number chocolates ${(user_money / price_chocolate).toFixed(
    0
  )} and your balance ${(user_money % price_chocolate).toFixed(2)}`
);

// 123 321
let three_digit_number = +prompt("Enter a three-digit number");
if (three_digit_number > 99 && three_digit_number < 1000) {
  console.log(
    three_digit_number % 10,
    Math.floor((three_digit_number % 100) / 10),
    Math.floor(three_digit_number / 100)
  );
} else {
  alert("You entered a number other than three digits");
}

// Percant bank
let user_deposit = +prompt("Enter your deposit");
let percent_bank = +prompt("Enter percnet bank");
let first_month = user_deposit * (percent_bank / 100 / 12);
let second_month = (user_deposit + first_month) * (percent_bank / 100 / 12);
console.log(`Amount of accrued charges ${first_month + second_month}`);

// 2 && 0 && 3 => 0
// 2 || 0 || 3 => 2
// 2 && 0 || 3 => 3
