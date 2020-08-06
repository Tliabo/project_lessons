/* String Methods */

/**
 * indexOf()
 * Find a substring in a string
 * -1 = nicht vorhanden
 * 0 oder grösser = vorhanden
 */
let notice = 'Important!: Remember to pay your Taxes!';

let messages = [notice, 'Monkeys eat Bananas'];

let word = 'Important!:';

for (let i = 0; i < messages.length; i++) {
  if (messages[i].indexOf(word) >= 0) {
    // Message is important
    console.log(messages[i]);
  } else {
    // Message is not important
    console.log('Not important');
  }
}

/**
 * Slice()
 * cut the string starting at a position (index)
 * returns string after this position
 */

console.log(notice.slice(10, 13));

/**
 * toUpperCase()
 * toLowerCase()
 */

let sentence = 'thE qUiCk bRoWn fOx juMps OveR tHE LaZy DoG';

// console.log(sentence.toUpperCase());
// console.log(sentence.toLowerCase());

// Expectet output: The quick brown fox jumps over the lazy dog
sentence = sentence.toLowerCase();

sentence = sentence[0].toUpperCase() + sentence.slice(1);
console.log(sentence);

/**
 * Replace
 *
 */

let evil = 'We love devils';

evil = evil.replace('devils', 'unicorns');
console.log(evil);
