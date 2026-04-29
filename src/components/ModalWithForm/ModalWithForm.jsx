import "./ModalWithForm.css";

function ModalWithForm({
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
  buttonText,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal modal_is-opened" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
  
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          {buttonText && (
        <button type="submit" className="modal__submit">
          {buttonText}
        </button>
      )}
          </form>
      </div>
    </div>
  );
}

export default ModalWithForm;