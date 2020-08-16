let students = [
  'Caro',
  'Iris',
  'Sarah',
  'Roman',
  'Martin'
];

let tp_location = 'sae';


function lordify(name, location) {
  return name + ' from ' + location;
}

for (let i = 0; i < students.length; i++) {
  console.log(lordify(students[i], tp_location));
}

// Arrow Function

function power(number) {
  return number * number;
}

console.log(power(2));

let powerArrow = number => number * number;

console.log(powerArrow(5));

// with concatenation
// let lordifyArrow = name => name + ' from Canada';
// console.log(lordifyArrow('Tobia', 'ree'));

// with concatenation and additional variable
// let lordifyArrow = (name, location) => name + ' from ' + location;
// console.log(lordifyArrow('Tobia', 'ree'));

// templatestring with variables
// let lordifyArrow = (name, location) => `${name} from ${location}`;
// console.log(lordifyArrow('Tobia', 'ree2'));