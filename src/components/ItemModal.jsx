import "./Modal.css";

function ItemModal({ isOpen, onClose, card }) {
    if (!card) return null;
  
    return (
      <div
        className={`modal ${isOpen ? "modal_is-opened" : ""}`}
        onClick={onClose}
      >
        <div
          className="modal__content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
          >
            ×
          </button>
  
          <img
            src={card.link}
            alt={card.name}
            className="modal__image"
          />
  
          <p className="modal__caption">{card.name}</p>
          <p className="modal__weather">
            Weather: {card.weather}
          </p>
        </div>
      </div>
    );
  }
  
  export default ItemModal;
  