fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    // console.log(data);

    // for (let i = 0; i < data.length; i++) {
    //   const card = document.createElement('div')
    //   card.classList.add('card');
    //
    //   const template = `
    //     <div><img class="card-img" src=""></div>
    //     <div>Name: ${data[i].name}</div>
    //     <div>Username: ${data[i].username}</div>
    //     <div>City: ${data[i].address.city}</div>
    //   `;
    //
    //   card.innerHTML = template;
    //   document.querySelector('.container').appendChild(card);
    // }


    data.forEach(user => {
      const card = document.createElement('div')
      card.classList.add('card');

      const template = `
        <div><img class="card-img" src="https://robohash.org/${user.username}?set=set4"></div>
        <div>Name: ${user.name}</div>
        <div>Username: ${user.username}</div>
        <div>City: ${user.address.city}</div>
      `;

      card.innerHTML = template;
      document.querySelector('.container').appendChild(card);
    })

  })

$.getJSON('https://jsonplaceholder.typicode.com/users', data => {
  // console.log(data)

});

// empfohlen zu brauchen von den beiden jquery Varianten
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/users'
}).done(data => {
  console.log(data)
})