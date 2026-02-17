import "./Main.css";
import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ clothingItems, onCardClick, weather }) {
  const { currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  console.log("Weather condition:", weather.condition);
  console.log("All item weather values:", clothingItems.map(i => i.weather));
  

  const filteredItems = clothingItems;



  return (
    <main className="content">
      <>
  <WeatherCard temperature={weather.temperature} />

  {weather.temperature && (
    <p className="content__subtitle">
      Today is {weather.temperature[currentTemperatureUnit]}°
      {currentTemperatureUnit} / You may want to wear:
    </p>
       )}
        </>

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
