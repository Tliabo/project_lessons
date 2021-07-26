const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3004;

app.listen(port, () => {
  console.log(`Server gestarted auf Port: ${port}`);
});

app.use(express.static('public'));

// weather API Endpoint
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
  const aqiUrl = `https://api.waqi.info//feed/geo:${lat};${lon}/?token=${process.env.AQU_API_KEY}`;
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
