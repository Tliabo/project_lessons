// Object Literal Enhancement (restructuring)
// get variables from the global scope and add them to an object

let name = 'Switzerland'
let capital = 'Bern'

let country = {name, capital}

console.log(country);

// This also works with object methods

let completeName = function() {
  console.log(`${this.capital} is the capital of ${this.name}`);
}

country = {name, capital, completeName};

console.log(country);
country.completeName()