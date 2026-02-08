import "./Modal.css";

function ModalWithForm({ name, title, buttonText, isOpen, onClose, children }) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_is-opened" : ""}`}
      onClick={onClose}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>

        <button
          type="button"
          className="modal__close"
          aria-label="Close modal"
          onClick={onClose}
        />

        <form className="modal__form" name={name}>
          {children}

          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
