import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function Main({ clothingItems, onCardClick, weather, onCardLike, isLoggedIn }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const filteredItems = clothingItems.filter((item) => {
    return item.weather === weather.condition;
  });

  return (
    <main className="main">
      <WeatherCard weather={weather} />

      <p className="main__description">
        Today is {weather.temperature?.[currentTemperatureUnit]}°{" "}
        {currentTemperatureUnit} / You may want to wear:
      </p>

      <ul className="cards">
        {filteredItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
