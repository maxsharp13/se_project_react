import "./WeatherCard.css";

function WeatherCard({ temperature }) {
    return (
      <section className="weather-card">
        <p className="weather-card__temp">{temperature}°F</p>
      </section>
    );
  }
  
  export default WeatherCard;
  