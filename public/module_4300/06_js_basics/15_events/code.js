console.log("Hello world");

// DOM Content Loaded

document.addEventListener('DOMContentLoaded', () => {
  const myElement = document.createElement('div');
  myElement.innerText = 'This is an example element';
  document.querySelector('p').after(myElement);
})

// On Load

window.onload = function () {
  const myElement = document.createElement('div');
  myElement.innerText = 'This Element was create after the on load event';
  document.querySelector('p').after(myElement);
}