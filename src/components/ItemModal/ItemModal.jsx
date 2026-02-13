import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  if (!card) return null;

  return (
    <div
      className={`modal ${isOpen ? "modal_is-opened" : ""}`}
      onClick={onClose}
    >
      <div
        className="modal__content item-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          aria-label="Close modal"
          onClick={onClose}
        />

        <img src={card.imageUrl} alt={card.name} className="item-modal__image" />

        <div className="item-modal__info">
          <h2 className="item-modal__title">{card.name}</h2>
          <p className="item-modal__weather">Weather: {card.weather}</p>
          <div className="item-modal__info">
  <h2 className="item-modal__title">{card.name}</h2>
  <p className="item-modal__weather">Weather: {card.weather}</p>
          
          <button
          type="button"
          className="item-modal__delete-button"
          onClick={() => onDelete(card)}
          >
          Delete item
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
