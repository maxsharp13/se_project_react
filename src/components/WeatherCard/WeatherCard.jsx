import { useContext } from "react";
import "./WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ temperature }) {
  const { currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  const displayTemp =
    temperature && temperature[currentTemperatureUnit];

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {displayTemp !== undefined ? `${displayTemp}°${currentTemperatureUnit}` : "--"}
      </p>
    </section>
  );
}

export default WeatherCard;
