// Get element by id
const mySentence = document.getElementById('firstSentence')
// console.log(mySentence);

// get element by Class Name
const myReds = document.getElementsByClassName('red')
// console.log(myReds[1])
// console.log(myReds)

// Get Elements by Tag Name -> output array

// Query Selector
const myH1 = document.querySelector('#myH1')
const cMyH1 = document.querySelector('.myH1')
const eH1 = document.querySelector('h1')

// console.log(myH1)
// console.log(cMyH1)
// console.log(eH1)

const myP = document.querySelector('P')
// console.log(myP)


// Query Selector All
// verwenden wenn ich nur ein element davon habe

const myPs = document.querySelectorAll('P')
// console.log(myPs)

// Make h1 blue
// myH1.style.color = 'blue'
// myH1.style.backgroundColor = 'red'

/* ---------------------------------------- */

myPs.forEach(p => {
  p.style.backgroundColor = 'lime';
  p.style.color = 'purple';
});

mySentence.style.color = 'pink';
mySentence.style.backgroundColor = 'yellow';

const allLis = document.querySelectorAll('li');
allLis.forEach(li => {
  li.style.color = 'purple';
});

const allReds =  document.querySelectorAll('.red');
allReds.forEach(li => {
  li.style.backgroundColor = 'red';
});

const allPurple = document.querySelectorAll('.purple');
allPurple.forEach(purpleElement => {
  purpleElement.style.color = 'white';
  purpleElement.style.backgroundColor = 'purple';
});

// const purple = document.getElementsByClassName('purple');
// purple[0].style.backgroundColor = 'purple';
// purple[0].style.color = 'white';