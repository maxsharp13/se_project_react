import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes?.some(
    (like) => like === currentUser?._id || like?._id === currentUser?._id
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
    <li className="card">

      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={handleCardClick}
      />


      <div className="card__header">
        <p className="card__name">{item.name}</p>

        {isLoggedIn && (
          <button
            type="button"
            className={`card__like-button ${
              isLiked ? "card__like-button_active" : ""
            }`}
            onClick={handleLikeClick}
          />
        )}
      </div>
    </li>
  );
}

export default ItemCard;