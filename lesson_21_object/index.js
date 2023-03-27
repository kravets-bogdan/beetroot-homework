const test = 1;
//
//  Car
const car = {
  manufacturer: 'Mercedes-Benz',
  model: 'S-class',
  yearOfProduction: 2022,
  averageSpeed: 120,
  fuelTankCapacity: 76,
  averageFuelConsumption: 7.5,
  drivers: ['Alex'],
  // Car info
  info: function () {
    for (let key in this) {
      if (key !== 'info' && key !== 'addDriver' && key !== 'findDriver' && key !== 'timeAndFuel') {
        console.log(`${key} - ${this[key]}`);
      }
    }
  },

  // Add Driver
  addDriver: function () {
    // test
    console.log('test: ', test);
    this.drivers.push(prompt('Name Driver'));
  },
  // Find Driver
  findDriver: function () {
    if (this.drivers.includes(prompt('Name Driver')) === true) {
      console.log('We have this driver');
    } else {
      console.log('Enter this name again');
    }
  },
  // Amount time and fuel
  timeAndFuel: function () {
    const distance = +prompt('Enter distance in kilometr');
    console.log(
      `Fuel amount: ${((distance / 100) * this.averageFuelConsumption).toFixed(2)} and time amount ${(
        distance / this.averageSpeed +
        Math.floor(distance / this.averageSpeed / 4)
      ).toFixed(1)}h`
    );
  },
};
// Time
const time = {
  hour: 2,
  minutes: 33,
  seconds: 55,
  // Time now
  timeNow: function () {
    for (let key in this) {
      if (key !== 'timeNow' && key !== 'addSeconds' && key !== 'addMinutes') {
        console.log(`${key} - ${this[key]}`);
      }
    }
  },
  // Add seconds
  addSeconds: function () {
    const seconds = +prompt('How many seconds to add ?');
    this.seconds += seconds;
    if (this.seconds > 60) {
      let minutes = Math.floor(this.seconds / 60);
      this.seconds -= minutes * 60;
      this.minutes += minutes;
    }
  },
  // Add Minutes
  addMinutes: function () {
    const minutes = +prompt('How many minutes to add ?');
    this.minutes += minutes;
    if (this.minutes > 60) {
      let hour = Math.floor(this.minutes / 60);
      this.minutes -= hour * 60;
      this.hour += hour;
      // If hour > 24 hour strat again
      if (this.hour) {
        let days = Math.floor(this.hour / 24);
        this.hour -= days * 24;
        console.log(days);
      }
    }
  },
};

let a = 5;
let b = 7;
console.log('b: ', b);
console.log('a: ', a);

[a, b] = [b, a];

console.log('b: ', b);
console.log('a: ', a);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('num: ', num);
let cloneNum = [];

for (let i = num.length - 1; i >= 0; i--) {
  cloneNum.push(num[i]);
}

console.log('cloneNum: ', cloneNum);
