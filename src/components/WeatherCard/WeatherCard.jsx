import "./WeatherCard.css";
import sunnyImg from "../../assets/Group 120.svg";

function WeatherCard({ temperature }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{temperature}°F</p>

      <img src={sunnyImg} alt="Sunny weather" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
