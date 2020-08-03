let firstNumber = parseInt(prompt('Please input your first number')); // NaN möglich

let operation = prompt('+, -, * or /'); // alle inputs möglich

let secondNumber = parseInt(prompt('Please input your second number')); // NaN möglich

let result;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert('This calculator ONLY works with numbers!');
} else {
  if (operation === '+') {
    result = firstNumber + secondNumber;
  } else if (operation === '-') {
    result = firstNumber - secondNumber;
  } else if (operation === '*') {
    result = firstNumber * secondNumber;
  } else if (operation === '/') {
    result = firstNumber / secondNumber; //nicht durch 0 teilen
  } else {
    result = 'You did not write the correct operator';
  }

  alert(result);
}
