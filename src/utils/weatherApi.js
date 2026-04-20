import { apiKey, latitude, longitude } from "./constants";
import { checkResponse } from "./api";

function getWeather() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`,
  ).then(checkResponse);
}

function parseWeatherData(data) {
  return {
    city: data.name,
    temperature: {
      F: Math.round(data.main.temp),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
  };
}

function getWeatherCondition(temp) {
  if (temp >= 86) return "hot";
  if (temp >= 66) return "warm";
  return "cold";
}

export { getWeather, parseWeatherData, getWeatherCondition };
