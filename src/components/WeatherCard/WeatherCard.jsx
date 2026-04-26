import { useContext } from "react";
import "./WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import weatherBg from "../../assets/Group 120.svg";

function WeatherCard({ temperature }) {
  const { currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  const displayTemp =
    temperature && temperature[currentTemperatureUnit];

  return (
    <section className="weather-card">
     <img
      src={weatherBg}
      alt="weather background"
      className="weather-card__bg"
   />

      <p className="weather-card__temp">
        {displayTemp !== undefined
          ? `${displayTemp}°${currentTemperatureUnit}`
          : "--"}
      </p>
    </section>
  );
}

export default WeatherCard;