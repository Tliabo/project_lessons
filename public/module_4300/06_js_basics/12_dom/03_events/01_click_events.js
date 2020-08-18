
// click event in js

// const myButton = document.querySelector('.container > button');
const myButton = document.querySelector('button');

// click event with function
// myButton.addEventListener('click', function (event) {
//   console.log('normal function', this);
// })

// with arrow function
myButton.addEventListener('click', event => {
  // console.log('arrow function', this);
  console.log(event)
})

myButton.addEventListener('click', () => {
  // console.log('arrow function', this);
  console.log('click')
})

