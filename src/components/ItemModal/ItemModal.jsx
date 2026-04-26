import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  if (!isOpen || !card) return null;

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete(card._id);
    }
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

          <button
            className="item-modal__delete"
            onClick={handleDeleteClick}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;