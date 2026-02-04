import { APIkey, latitude, longitude } from "./constants";

function getWeather() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
}

function parseWeatherData(data) {
  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
  };
}

function getWeatherCondition(temp) {
  if (temp >= 86) return "hot";
  if (temp >= 66) return "warm";
  return "cold";
}

export { getWeather, parseWeatherData, getWeatherCondition };
