// 1. Create a 'double' function which will take in a number (n) and return double it's value
let doubleIt = number => number * 2;
console.log(doubleIt(1));

// 2. Create a function that takes in a number (age) as an argument and returns a message that tells you that age in dog years!
//    (one human year = seven dog years)
let ageInDogYears = age => 'Your age in dog years is ' + age * 7;
console.log(ageInDogYears(5));


// 3. Create a function that will convert a value from celcius to fahrenheit and another one that converts fahrenheit to celcius
let toCelsius = tempInFarenheit => (tempInFarenheit - 32) * 5 / 9;
let toFarenheit = tempInCelsius => (tempInCelsius * 9 / 5) + 32;

console.log(toCelsius(1));
console.log(toFarenheit(1));


// 4. Create a function that takes the length, width and height of a  cube and return it's volume
let volume = (length, width, height) => length + width * height;
console.log(volume(2, 3, 4));

// 5. !BONUS!  Create a function that will take in a sentence as argument and capitalize the first letter of all it's words
//    You want to use split() to split the sentence into individual words and save them in an array
function capFirstLetter(sentence) {
  let words = sentence.split(' ');
  let capSentence = '';

  for (let i = 0; i < words.length; i++) {
    capSentence += words[i][0].toUpperCase() + words[i].slice(1) + ' ';
  }

  return capSentence;
}

function capFirstLetter2(sentence) {
  let words = sentence.split(' ');
  let capWords = [];

  for (let i = 0; i < words.length; i++) {
    capWords.push(words[i][0].toUpperCase() + words[i].slice(1));
  }

  return capWords.join(' '); // Gegenteil von split is join
}

console.log(capFirstLetter('this is a sentence that should be capitalized'));
console.log(capFirstLetter2('this is a sentence that should be capitalized'));