const express = require('express');
const app = express();

// Middleware
let logger = function(request, response, next) {
  console.log('User has connected to our server');
  next();
};

let requestTime = function(request, response, next) {
  request.requestTime = Date.now();
  next();
};

app.use(requestTime);

// app.use(logger);

app.get('/', (request, response) => {
  let responseText = `<h1>Hello User</h1><br><small>You logged in at: ${request.requestTime}</small>`;
  response.send(responseText);
});

app.listen(8081, () => {
  console.log('ServerRunning : http://localhost:8081');
});