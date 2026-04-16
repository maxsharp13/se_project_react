import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  const currentUser = useContext(CurrentUserContext);

  if (!isOpen || !card) return null;


  const isOwn = card.owner === currentUser?._id;

  const handleDeleteClick = () => {
    onDelete(card);
  };

  return (
    <div className="modal modal_is-opened" onClick={onClose}>
      <div
        className="item-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="item-modal__close"
          onClick={onClose}
        />

        <img
          src={card.imageUrl}
          alt={card.name}
          className="item-modal__image"
        />

        <div className="item-modal__footer">
          <div className="item-modal__text">
            <h2 className="item-modal__title">{card.name}</h2>
            <p className="item-modal__weather">
              Weather: {card.weather}
            </p>
          </div>

          {isOwn && (
            <button
              type="button"
              className="item-modal__delete"
              onClick={handleDeleteClick}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;