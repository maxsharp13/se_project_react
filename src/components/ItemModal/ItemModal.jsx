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
        className="modal__content modal__content_type_image"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={card.imageUrl}
          alt={card.name}
          className="modal__image"
        />

        <div className="modal__footer">
          <p className="modal__caption">{card.name}</p>

          <button
            className="modal__delete"
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