import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  clothingItems,
  onAddClick,
  onCardClick,
  onCardLike,
  isLoggedIn,
}) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__title">Your items</h2>

        {isLoggedIn && (
          <button
            type="button"
            className="clothes-section__add-button"
            onClick={onAddClick}
          >
            + Add new
          </button>
        )}
      </div>

      <ul className="cards">
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
    </section>
  );
}

export default ClothesSection;
