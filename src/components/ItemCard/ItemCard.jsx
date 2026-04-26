import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes?.some(
    (id) => id === currentUser?._id
  );


  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(item);
    }
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();

    if (onCardLike) {
      onCardLike({
        id: item._id,
        isLiked,
      });
    }
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>

        {true && (
          <button
            className={`card__like-button ${
              isLiked ? "card__like-button_active" : ""
            }`}
            onClick={handleLikeClick}
          />
        )}
      </div>

      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;