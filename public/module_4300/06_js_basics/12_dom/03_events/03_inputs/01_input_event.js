// document.querySelector('button').addEventListener('click', e => {
//   // stops page from refreshing when clicking on button
//   e.preventDefault();
//   // saves the value after clicking
//   const enemy = document.querySelector('#enemy').value;
//
// });

document.querySelector('button').addEventListener('click', e => {

  const storyContainer = document.querySelector('#storyContainer');

  storyContainer.innerHTML = '';

  e.preventDefault();

  const enemy = document.querySelector('#enemy').value;
  const hero = document.querySelector('#hero').value;
  const princess = document.querySelector('#princess').value;
  const verbEnemy = document.querySelector('#verbEnemy').value;
  const verbStory = document.querySelector('#verbStory').value;
  const verbStory2 = document.querySelector('#verbStory2').value;

  let story = `
There was a person named ${hero}.
${hero} didnt know what will happen next and there was it, the ${verbEnemy} ${enemy}. 
${verbStory} story ${verbStory2}, ${hero} won and ${enemy} lost. 
Princess ${princess} and the hero lived happy after.
`;
  if (enemy.length > 0 || hero.length > 0 || princess.length > 0 || verbEnemy.length > 0 || verbStory.length > 0 || verbStory2.length > 0) {
    const ptag = document.createElement('p');
    ptag.innerText = story;

    storyContainer.appendChild(ptag);
  } else {
    const error = `One or more of your inputs have no values`;
    console.log(error)
  }


})

