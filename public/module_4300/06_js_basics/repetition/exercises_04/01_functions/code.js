// Complete the following exercises_04 using functions

/* 1
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

function setFirstLetterCapped(text) {
    let letters = text.split(' ');
    let editedLetters = []
    letters.forEach(letter => {
        let editedLetter = letter[0].toUpperCase() + letter.slice(1);
        editedLetters.push(editedLetter);
    })
    return editedLetters.join(' ');
}

// console.log(setFirstLetterCapped('the quick brown fox'));

/* 2
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function findLongestWord(text) {
    let letters = text.split(' ');
    let longestWord = '';

    letters.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    console.log(longestWord);
}

// findLongestWord('Web Development Tutorial');

/* 3
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

function isPrime(number) {

    if (number === 1 || number === 2) {
        return true;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

// console.log(isPrime(23964093));