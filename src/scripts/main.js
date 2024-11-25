const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const cities = ["Ceglow", "Warsaw", "Zwolen", "Radom"];
const weatherContainer = document.getElementById("weather-card-list");

function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pl`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Nie udało się pobrać danych dla ${city}: ${response.status}`,
        );
      }
      return response.json();
    })
    .then((data) => renderWeatherCard(data))
    .catch((error) => console.error("Błąd:", error));
}

function renderWeatherCard(data) {
  const cityName = data.city.name;
  const weather = data.list[0];
  const temperature = weather.main.temp.toFixed(1);
  const humidity = weather.main.humidity;
  const windSpeed = weather.wind.speed;

  const card = document.createElement("div");
  card.className = "weather-card";

  card.innerHTML = `
    <h2>${cityName}</h2>
    <p>Temperatura: ${temperature} °C</p>
    <p>Wilgotność: ${humidity}%</p>
    <p>Prędkość wiatru: ${windSpeed} m/s</p>
  `;

  weatherContainer.appendChild(card);
}

cities.forEach(fetchWeatherData);
