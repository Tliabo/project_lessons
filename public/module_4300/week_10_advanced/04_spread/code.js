// Spread operator

/* ... */

let saCountries = ['Columbia', 'Venezuela', 'Bolivia'];
let euCountries = ['Germany', 'Austria', 'Italy'];

let allCountries = [...saCountries, ...euCountries];


console.log(saCountries, euCountries);
console.log(allCountries);

// in Practice

// BEFORE: The array was mutated
let fruits = ['apple', 'banana', 'pear'];
let [last] = fruits.reverse();

console.log(last, fruits);

let vegies = ['carrot', 'lettuce', 'spinach'];
let [end] = [...vegies].reverse();

console.log(end, vegies);

// first / rest

let cities = ['New York', 'los angeles', 'miami'];
let [first, ...rest] = cities;

console.log(cities);
console.log(first);
console.log(rest);


// n number of arguments

function directions(...args) {
  let [start, ...remainder] = args;
  let [finish, ...stops] = remainder.reverse();

  console.group();
  console.log(`Drive through: ${args.length} towns`);
  console.log(`Start in: ${start}`);
  console.log(`Destination: ${finish}`);
  console.log(`Stopping ${stops.length} times in between`);
  console.groupEnd();
}

directions('Trukee', 'Tahoe', 'Sunnyside', 'Homewood', 'Tamoa');

// Spread also works with objects

let morning = {
  breakfast: 'oatmeal',
  lunch: 'peanut butter and jelly'
};

let dinner = 'mac and cheese';

let backpackingMeals = {
  ...morning,
  dinner
}

console.log(backpackingMeals);