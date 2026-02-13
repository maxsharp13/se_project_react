import "./Main.css";
import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ clothingItems, onCardClick, weather }) {
  const { currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  const filteredItems =
  weather.condition && clothingItems.length
    ? clothingItems.filter(
        (item) =>
          item.weather &&
          item.weather.toLowerCase().trim() ===
            weather.condition.toLowerCase().trim()
      )
    : clothingItems;


  return (
    <main className="content">
      {weather.temperature && (
        <>
          <WeatherCard temperature={weather.temperature} />

          <p className="content__subtitle">
            Today is {weather.temperature[currentTemperatureUnit]}°
            {currentTemperatureUnit} / You may want to wear:
          </p>
        </>
      )}

      <ul className="cards">
        {filteredItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={onCardClick}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
