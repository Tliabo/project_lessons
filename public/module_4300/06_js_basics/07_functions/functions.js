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
