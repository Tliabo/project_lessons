function setup() {
  // remove canvas
  noCanvas();

  // capture video from webcam
  const video = createCapture();
  video.parent('#main');
  video.size(320, 240);

  let lat, lon;
  let city, temp, description, aqi;

  // Geo location
  // console.log(navigator);
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async position => {
      try {
        console.log(position);
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        const apiUrl = `weather/${lat},${lon}`;

        const response = await fetch(apiUrl);
        const json = await response.json();
        console.log(json);

        city = json.weather.name;
        temp = json.weather.main.temp;
        description = json.weather.weather[0].description;
        aqi = json.aqi.data.aqi;

        console.log(city, temp, description);

        const template = `
      <div class="more-info">
        <div class="weatherDis">
          <div>
            <i class="fas fa-thermometer-three-quarters"></i><div class="temp">${temp} °C</div>
            <i></i><div class="summary">${description}</div>
          </div>
        </div>
        <div>
          <p class="location" title="${lat},${lon}"><i class="fas fa-map-marker-alt"></i> ${city}</p>
          <p class="aqi">AQI: ${aqi}</p>
        </div>
      </div>
      `;

        const weatherDiv = document.createElement('div');
        weatherDiv.innerHTML = template;
        document.querySelector('#main').append(weatherDiv);
      } catch (error) {
        console.error(error);
      }
    });
  } else {
    console.error('Geolocation is not available in this browser');
  }
}