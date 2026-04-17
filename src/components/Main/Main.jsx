import ItemCard from "../ItemCard/ItemCard";

function Main({ clothingItems, onCardClick, weather, onCardLike, isLoggedIn }) {
  return (
    <main>
      <ul>
        {clothingItems.map((item) => (
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