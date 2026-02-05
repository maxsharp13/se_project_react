import "./Main.css";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

function Main({ clothingItems, onCardClick, weather }) {
  const filteredItems = weather.condition
    ? clothingItems.filter(
        (item) =>
          item.weather.toLowerCase() === weather.condition
      )
    : clothingItems;

  return (
    <main className="content">
      {weather.temperature !== null && (
        <WeatherCard temperature={weather.temperature} />
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
