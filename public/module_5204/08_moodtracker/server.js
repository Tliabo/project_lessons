const express = require('express');
const fetch = require('node-fetch');
const {request, response} = require("express");
const Datastore = require('nedb');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3004;

app.listen(port, () => {
  console.log(`Server gestarted auf Port: ${port}`);
});

app.use(express.static('public'));

app.use(express.json({
  limit: '1mb'
}))
const database = new Datastore('database/database.db');
database.loadDatabase();

// weather & aqi API Endpoint
app.get('/weather/:latlon', async (request, response) => {
  const latlon = request.params.latlon.split(',');
  const lat = latlon[0];
  const lon = latlon[1];
  // console.log(lat, lon);

  // AOI Key for open weather map
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`;

  const weatherResponse = await fetch(weatherUrl);
  const weatherJson = await weatherResponse.json();

  // console.log(weatherJson);

  // AQI API
  const aqiUrl = `https://api.waqi.info//feed/geo:${lat};${lon}/?token=${process.env.AQI_API_KEY}`;
  const aqiResponse = await fetch(aqiUrl);
  const aqiJson = await aqiResponse.json();
  // console.log(aqiJson);

  const data = {
    weather: weatherJson,
    aqi: aqiJson
  };

  // send response to the client
  response.json(data);
});

// database API
app.post('/api', (request, response) => {
  // Send information to the database
  console.log('Database post-endpoint got a request');
  const data = request.body;

  data.timestamp = Date.now();
  database.insert(data);
  response.json(data);
})

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      console.error(err);
      response.end()
    }
    response.json(data)
  })
})