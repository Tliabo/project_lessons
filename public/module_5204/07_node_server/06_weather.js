const express = require('express');
const app = express();

app.set('view-engine', 'ejs');

app.get('/', (request, response) => {
  renderView(request, response)
});

app.post('/', (request, response) => {
  const city = '';
  const apiKey = '1743e4c2bda93b5c58bef265b3a8e9ea'
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

  const queue = `?q=${city}&appid=${apiKey}&units=metric`;

  request()

  renderView(request, response)
})

function renderView(request, response) {
  let data = {}

  if (request.body) {
    console.log(request.body)
    let parsedBody = JSON.parse(request.body)
    data.parsedBody = parsedBody
  }
  response.render('weather.ejs', {
    data: data
  })
}

app.listen(8081, () => {
  console.log('ServerRunning : http://localhost:8081');
});