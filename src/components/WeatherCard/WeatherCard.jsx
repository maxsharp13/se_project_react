import { useContext } from "react";
import "./WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ temperature }) {
  const { currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temperature[currentTemperatureUnit]}°
        {currentTemperatureUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
