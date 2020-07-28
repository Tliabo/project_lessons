// Operators in JavaScript

// Assignment Operator (=)

var myNum = 24;

// The addition Operator (+)

// with numbers (adds)
var result = myNum + myNum;

// with strings (concatenates)
var myString1 = 'Hello';
var myString2 = 'World';

var conc = myString1 + ' ' + myString2;

// The substractor operator (-)
var substraction = 100 - myNum;

// kleiner als (<)
console.log(100 < 200)
// grösser als
console.log(100 > 200)
//grösser gleich
console.log(100 >= 200)
// kleiner gleich
console.log(100 <= 200)
// genau gleich (ohne datentyp vergleich)
console.log(100 == '100') //true
// genau gleich (mit datentyp)
console.log(100 === '100') // false

// Modulo Operator (rest)
console.log(8 % 2) //rest 0 weil 8/2 = 4 ohne rest
console.log(8 % 3) //rest 2 weil 8/3 = 2 mit rest 2

// Not operator (!)
console.log(100 != 100)// false
console.log(100 != '100')// false
console.log(100 !== 100)// false
console.log(100 !== 'xxx')// true

// Combinator and(&&) or(||)
console.log(300 == 300 && 110 == 200) //false
console.log(300 == 300 || 110 == 200) //true

