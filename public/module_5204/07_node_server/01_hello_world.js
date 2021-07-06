const express = require('express');
const app = express();

app.get('/', (request, response) => {
  // console.log(request);
  // console.log(response);
  response.send('Hello Patric');
});

app.listen(8081, () => {
  console.log('ServerRunning : http://localhost:8081');
});