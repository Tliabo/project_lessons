console.log('script loaded')

// Create a div
const myDiv = document.createElement('div');

// myDiv.innerText = '<p>hello world</p>';
myDiv.innerHTML = '<p>hello world</p>';

document.querySelector('.container').appendChild(myDiv);

document.querySelector('.deleteMe').remove();