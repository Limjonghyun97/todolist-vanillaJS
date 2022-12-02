const weather = document.querySelector(".weather");

const API_KEY = "2cb6dd8fe635507b3b78a0f94baba671";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}8&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerHTML = `${data.main.temp}℃, ${data.name}(${data.weather[0].main})`
    });
}
function onGeoError() {
  alert("Cant' find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
