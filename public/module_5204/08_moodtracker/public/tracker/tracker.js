fetchData();

async function fetchData() {
  // use fetch to get data from /api
  const response = await fetch('/api');
  const data = await response.json();
  let counter = 0;


  console.log(data)
  data.forEach(item => {
    counter++;

    // AQ index
    /**
     * < 51 = 'good'
     * > 50 && < 101 = 'moderate'
     * > 100 && < 151 = 'unhealty for sensitive groups'
     * > 150 && < 201 = 'unhealty'
     * > 200 && < 301 = 'very unhealty'
     * > 300 = 'hazardous'
     */

    let aqText;
    let aqClass;

    if (item.aqi < 51) {
      aqText = 'good';
    } else if (item.aqi < 101) {
      aqText = 'moderate';
    } else if (item.aqi < 151) {
      aqText = 'unhealty for sensitive groups';
    } else if (item.aqi < 201) {
      aqText = 'unhealty';
    } else if (item.aqi < 301) {
      aqText = 'very unhealty';
    } else if (item.aqi > 300) {
      aqText = 'hazardous';
    }

    const container = document.createElement('div');
    container.innerHTML = `
    <section class="mood-container">
        <p class="counter">${counter}</p>
        <p class="date">${new Date(item.timestamp).toLocaleTimeString()}</p>
        <p class="mood">${item.mood}</p>
        <div class="face-container">
            <img src="${item.image64}">
        </div>
        <div class="weatherDis">
          <div>
            <i class="fas fa-thermometer-three-quarters"></i><div class="temp">${item.temp} °C</div>
            <i></i><div class="summary">${item.description}</div>
          </div>
        </div>
        <div>
          <p class="location"><i class="fas fa-map-marker-alt"></i> ${item.city}</p>
          <p class="aqi">AQI: ${item.aqi}</p>
          <p>${aqText}</p>
        </div>
    </section>
    `
    document.querySelector('#main').append(container);
  })
}
