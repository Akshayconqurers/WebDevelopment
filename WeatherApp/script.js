const apiKey = 'YOUR_API_KEY'; // Replace with your API key

document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

document.getElementById('geoBtn').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByCoords(latitude, longitude);
    }, () => {
      alert('Unable to retrieve your location.');
    });
  } else {
    alert('Geolocation is not supported.');
  }
});

document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  getWeather(url);
}

function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  getWeather(url);
}

function getWeather(url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('City not found');
      return res.json();
    })
    .then(data => displayWeather(data))
    .catch(err => {
      document.getElementById('weatherInfo').innerHTML = `<p style="color: red;">${err.message}</p>`;
    });
}

function displayWeather(data) {
  const { name, main, weather, wind, sys } = data;
  const weatherHTML = `
    <div class="fade-in">
      <h2>${name}, ${sys.country}</h2>
      <img src="http://openweathermap.org/img/w/${weather[0].icon}.png" alt="Weather icon" />
      <p><strong>${weather[0].main}</strong> (${weather[0].description})</p>
      <p>🌡️ Temp: ${main.temp}°C (Feels like: ${main.feels_like}°C)</p>
      <p>💧 Humidity: ${main.humidity}%</p>
      <p>🌬️ Wind: ${wind.speed} m/s</p>
    </div>
  `;
  document.getElementById('weatherInfo').innerHTML = weatherHTML;
}
