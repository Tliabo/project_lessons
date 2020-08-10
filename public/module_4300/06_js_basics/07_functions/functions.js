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

let lordifyArrow;
lordifyArrow = name => name + ' from ' + 'Canada';
// lordifyArrow = (name, location) => name + ' from ' + location;

console.log(lordifyArrow('Tobia', 'ree'));