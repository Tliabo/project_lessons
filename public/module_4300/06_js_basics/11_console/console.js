// Normal log
console.log('I am logging a string');

// Multiple logs
console.log('String 1', 'String 2', 3);

// Group logs
console.group('Fruits');
console.log('apple');
console.log('banana');
console.log('pear');
console.log('orange');
console.groupEnd();

console.group('Students')
console.group('WDD320')
console.log('Tobia')
console.log('Cath')
console.log('Urs')
console.groupEnd()
console.group('WDD920')
console.log('Popcorn')
console.log('Zoom')
console.log('Koda')
console.groupEnd()
console.groupEnd()

// Error
console.error('Something is missing :(')

// Info
console.info('Slider was turned to the right')

// Warning
console.warn('Image didn\'t load correctly')

const myObj = {
  cost: 'chf 2.33',
  weight: '6 kg',
  availability: '10 Units'
}

// console.log(myObj);
console.table(myObj);

const names = [['Jane', 'Doe'], ['John', 'Smith'], ['James', 'Bond']];
console.table(names);