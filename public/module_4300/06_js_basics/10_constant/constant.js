//überall verfügbar
// var foo = 'foo';

// scope begrenzt
let foo = 'foo';

// nicht veränderbar scope
const BAR = 'bar';

// bei arrays items hinzufügbar aber nicht neu zuweisbar

// error
// BAR = 'popcorn';
console.log(BAR);

if (true) {
  let foo = 'banana';
  console.log(foo);
}
console.log(foo);