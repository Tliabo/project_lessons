const express = require('express');
const app = express();

app.set('view-engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index.ejs');
});
app.get('/about', (request, response) => {
  response.render('about.ejs');
});

app.listen(8081, () => {
  console.log('ServerRunning : http://localhost:8081');
});