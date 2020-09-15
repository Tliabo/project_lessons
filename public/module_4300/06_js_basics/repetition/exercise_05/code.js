
document.querySelector('#createBox').addEventListener('click', creatBox);

const posMinX = 100;
const posMinY = 100;
let posMaxX = window.innerWidth - posMinX;
let posMaxY = window.innerHeight - posMinY;

let counter = 0;

for (let i = 0; i < 100; i++) {
  creatBox();
}

function creatBox() {
  let box = document.createElement('div');

  let posX = (Math.random() * posMaxX);
  let posY = (Math.random() * posMaxY);

  const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);

  box.classList.add('box');
  box.style.left =  `${posX}px`;
  box.style.top =  `${posY}px`;
  box.style.background = `#${randomColor}`

  updateCounter();
  document.querySelector('.wrapper').appendChild(box);
}

function updateCounter() {
  counter ++;
  document.querySelector('#counter').innerText = counter;
}