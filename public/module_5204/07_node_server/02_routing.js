const express = require('express');
const app = express();

app.get('/', (request, response) => {
  // Got a GET request, sending a response back
  response.send('Hello Patric');
});

app.post('/', function(request, response) {
  // Got a POST request
  response.send('Hello Dana');
});

app.get('/about', (request, response) => {
  // Got a get request, sending a sepsonse back
  response.send('Hello Phil');
});

app.listen(8081, () => {
  console.log('ServerRunning : http://localhost:8081');
});