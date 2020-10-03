// API: https://docs.magicthegathering.io/

fetch('https://api.magicthegathering.io/v1/cards')
  .then(response => response.json())
  .then(data => {
    console.log(data.cards);

    data.cards.forEach(card => {
      const cardContainer = document.createElement('div')
      cardContainer.classList.add('card');

      const template = `
        <img src="${card.imageUrl}" title="${card.name}">
      `;

      cardContainer.innerHTML = template;
      document.querySelector('.container').appendChild(cardContainer);

      $('.card img').on('click', function (e) {
        $(this).animate({
          width: '200px',
          position: 'absolute',
          top: '10px',
          left: '50%'
        }, 1000)
      })
    })

  })

$.getJSON('https://api.magicthegathering.io/v1/cards', data => {
  // console.log(data)

});

// empfohlen zu brauchen von den beiden jquery Varianten
$.ajax({
  url: 'https://api.magicthegathering.io/v1/cards'
}).done(data => {
  // console.log(data)
})

