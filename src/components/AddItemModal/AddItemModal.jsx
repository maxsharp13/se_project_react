import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

function AddItemModal({ isOpen, onClose, onAddItem }) {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(values);
    resetForm(); 
  };

  return (
    <ModalWithForm
      title="New Garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Add garment"
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          className="modal__input"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Image URL
        <input
          type="url"
          name="imageUrl"
          className="modal__input"
          required
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Weather
        <input
          type="text"
          name="weather"
          className="modal__input"
          placeholder="hot / warm / cold"
          required
          value={values.weather}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default AddItemModal;