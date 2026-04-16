import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);


  const isLiked = item.likes?.some(
    (id) => id === currentUser?._id
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
      <p className="card__name">{item.name}</p>


      {isLoggedIn && (
        <button
          className={likeButtonClassName}
          onClick={handleLikeClick}
        >
          ♥
        </button>
      )}

      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;