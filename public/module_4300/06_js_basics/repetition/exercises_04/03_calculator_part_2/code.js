// Create a calculator that can add, substract, multiply and divide
// Clicking on a number should display the number on the display
// If another number is clicked then the concatenation of those numbers should be displayed

/*
  EXAMPLE:

  user clicks number 2 - DISPLAY: 2
  user clicks number 3 - DISPLAY: 23
  user clicks number 0 - DISPLAY: 230

*/

// Clicking on an operator (+ - / x) will reset the display (remember to save the number for later)
// When the display resets, then the operation should also be shown
// Clicking on further number will start displaying the numbers in the display again, concatenated after each other

/*
  EXAMPLE:

  user clicks number 2 - DISPLAY: 2
  user clicks number 3 - DISPLAY: 23
  user clicks number 0 - DISPLAY: 230

  user clicks operator + - Display +

  user clicks number 3 - DISPLAY: +3
  user clicks number 3 - DISPLAY: +33
  user clicks number 2 - DISPLAY: +332

*/

// When the = sign is pressed the result of the operation and the two number should be displayed

const display = document.querySelector('#display-inner');
const keys = document.getElementsByTagName('button');

let buildNumber = '';
let query = [];

function addClickToKeys() {
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', e => {
      addToDisplay(e.target.innerHTML);
    });
  }
}

function calculate() {
  let result;

  for (let i = 0; i < query.length; i++) {

    if (!isNaN(query[i]) && isNaN(query[i + 1]) && !isNaN(query[i + 2])) {
      if (query[i + 1] === '+') {
        result = query[i] + query[i + 2];
      } else if (query[i + 1] === '-') {
        result = query[i] - query[i + 2];
      } else if (query[i + 1] === 'x') {
        result = query[i] * query[i + 2];
      } else if (query[i + 1] === '/') {
        result = query[i] / query[i + 2];
      } else {
        console.log('you are a bad boi!')
      }
    }
  }
  return result;
}

function addToDisplay(input) {
  if (!isNaN(input) || input === '.') {
    buildNumber += input;
    display.innerHTML = buildNumber;
  } else if (input !== '=' && input !== 'Clear') {
    query.push(parseFloat(buildNumber));
    query.push(input);
    buildNumber = '';
    display.innerHTML = input;
  } else if (input === '=') {
    query.push(parseFloat(buildNumber));
    buildNumber = calculate();
    query = [];
    query.push(buildNumber);
    display.innerHTML = buildNumber;
  } else {
    query = [];
    buildNumber = '';
    display.innerHTML = '';
  }
}


addClickToKeys();