let divElement;


// if possible styling in css

// const gridContainer = document.querySelector('.container');
// gridContainer.style.display = 'grid';
// gridContainer.style.gridTemplateColumns = 'repeat(10, 1fr)';
// gridContainer.style.gap = '1rem';


for (let i = 0; i < 100; i++) {
  divElement = document.createElement('div');
  divElement.innerText = `div: ${i + 1}`;
  divElement.style.width = '50px';
  divElement.style.height = '50px';

  if (i % 2 === 0) {
    divElement.classList.add('bg-blue');
    // divElement.style.backgroundColor = 'blue';
  } else {
    divElement.classList.add('bg-red')
    // divElement.style.backgroundColor = 'red';
  }

  document.querySelector('.container').appendChild(divElement);
}