var myArray = ['Popcorn', 'Acorn', 'Lolzz', 'Ant', 'Fish'];

for (let i = 0; i < myArray.length; i++) {
  if (
    myArray[i].startsWith('A') ||
    myArray[i].startsWith('B') ||
    myArray[i].startsWith('C') ||
    myArray[i].endsWith('x') ||
    myArray[i].endsWith('y') ||
    myArray[i].endsWith('z')
  ) {
    console.log(myArray[i]);
  }
}

console.log('---');

for (let i = 0; i < myArray.length; i++) {
  if (
    myArray[i][0] === 'A' ||
    myArray[i][0] === 'B' ||
    myArray[i][0] === 'C' ||
    myArray[i][myArray[i].length - 1] === 'x' ||
    myArray[i][myArray[i].length - 1] === 'y' ||
    myArray[i][myArray[i].length - 1] === 'z'
  ) {
    console.log(myArray[i]);
  }
}

console.log('---');

for (let i = 0; i < myArray.length; i++) {
  var firstLetter = myArray[i][0];
  var lastIndex = myArray[i].length - 1;
  var lastLetter = myArray[i][lastIndex];

  if (
    firstLetter === 'A' ||
    firstLetter === 'B' ||
    firstLetter === 'C' ||
    lastLetter === 'x' ||
    lastLetter === 'y' ||
    lastLetter === 'z'
  ) {
    console.log(myArray[i]);
  }
}
