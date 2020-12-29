// We can use destructuging to take objcts apart

let sandwich = {
  bread: 'plain italian',
  meat: 'pulled pork',
  cheese: 'chedar',
  toppings: ['lettuce', 'tomato', 'cucumber']
}


// in this case we want to 'extract' the bread and meat properties
let {bread, meat} = sandwich

//still the same content
console.log(bread);
console.log(meat);

console.log(sandwich.bread);
console.log(sandwich.meat);

// this variable is independent from the main sandwich object
bread = 'french'

console.log('destructured:', bread, meat);
console.log('destructured:', sandwich.bread, sandwich.meat);