const express = require('express');
const app = express();

app.set('view-engine', 'ejs');

app.get('/', (request, response) => {

  let students = [
    { name: 'Tobia', note: '14' },
    { name: 'Dana', note: '6' },
    { name: 'Jasmin', note: '1' },
    { name: 'Zipora', note: '8' }
  ];

  let message = "Express is very simple and has many users!";

  response.render('index.ejs', {
    students: students,
    message: message
  });
});
app.get('/about', (request, response) => {
  response.render('about.ejs');
});

app.listen(8081, () => {
  console.log('ServerRunning : http://localhost:8081');
});