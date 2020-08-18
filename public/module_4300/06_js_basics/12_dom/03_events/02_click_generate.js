const btnGenerateDiv = document.querySelector('button');

const divContainer = document.querySelector('.container');


btnGenerateDiv.addEventListener('click', e => {
  const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  // const randomColor = Math.floor(Math.random() * 256).toString(); // RGB value 1x
  const newDiv = document.createElement('div');
  newDiv.style.height = '50px';
  newDiv.style.width = '50px';
  newDiv.addEventListener('click', function (event) {
    this.remove()
  })
  newDiv.style.backgroundColor = `#${randomColor}`
  divContainer.appendChild(newDiv);
  console.log(0xffffff)
})

// it works but the editor doesnt know what kind of element would target be
// btnGenerateDiv.addEventListener('click', e => {
//   const newDiv = document.createElement('div');
//   newDiv.style.height = '20px';
//   newDiv.style.width = '20px';
//   newDiv.addEventListener('click', event => {
//     event.target.remove();
//   })
//   newDiv.style.backgroundColor = 'red';
//   divContainer.appendChild(newDiv);
// })
