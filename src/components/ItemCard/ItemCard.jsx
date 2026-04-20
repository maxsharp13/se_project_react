import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes?.some(
    (like) => like === currentUser?._id || like._id === currentUser?._id,
  );

  const likeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleLikeClick = (e) => {
    e.stopPropagation();
    onCardLike({
      id: item._id,
      isLiked,
    });
  };

  return (
    <li className="card" onClick={() => onCardClick(item)}>
      <div className="card__header">
        <p className="card__name">{item.name}</p>

        {isLoggedIn && (
          <button
            type="button"
            className={likeButtonClassName}
            onClick={handleLikeClick}
          >
            ♥
          </button>
        )}
      </div>

      <img src={item.imageUrl} alt={item.name} className="card__image" />
    </li>
  );
}

export default ItemCard;
