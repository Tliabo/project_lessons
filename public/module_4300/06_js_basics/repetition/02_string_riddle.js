/**
 * Fix this list
 *
 * The names in this list should be all lowercase except for their first letter which
 * should be capitalized
 * Create a new array with the correct data
 */

var students = ['luCa', 'rEZa', 'ChiN', 'meliSSA', 'NoAH'];
// This is the variable that will contain all our processed words
var result = [];

let name;

for (let i = 0; i < students.length; i++) {
  name = students[i];
  name = name.toLowerCase();
  name = name[0].toUpperCase() + name.slice(1);

  result.push(name);
}

console.log(result);

/**
 * The following data is corrupted
 * We know that the data we need is correct after the ;
 * Create a new array with the correct data
 */

var cities = [
  'MAN675847583748sjt567654;London',
  'GNF576746573fhdg4737dh4;New York',
  'LIV5hg65hd737456236dch46dg4;Madrid',
  'SYB4f65hf75f736463;Cairo',
  'HUD5767ghtyfyr4536dh45dg45dg3;Tokyo'
];

// This is the array where we will push our processed string
var result1 = [];

for (let i = 0; i < cities.length; i++) {
  result1.push(cities[i].slice(cities[i].indexOf(';') + 1));
}
console.log(result1);
