import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

function AddItemModal({ isOpen, onClose, onAddItem }) {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem({
      name: values.name,
      imageUrl: values.imageUrl,
      weather: values.weather,
    });

    resetForm(); 
  };

  return (
    <ModalWithForm
      title="Add new garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Add garment"
    >
      <label className="form__label">
        Name
        <input
          type="text"
          name="name"
          className="form__input"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form__label">
        Image
        <input
          type="url"
          name="imageUrl"
          className="form__input"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>

      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Select the weather type:
        </legend>

        <div className="form__radio-group">
          <label className="form__radio">
            <input
              type="radio"
              name="weather"
              value="hot"
              checked={values.weather === "hot"}
              onChange={handleChange}
            />
            Hot
          </label>

          <label className="form__radio">
            <input
              type="radio"
              name="weather"
              value="warm"
              checked={values.weather === "warm"}
              onChange={handleChange}
            />
            Warm
          </label>

          <label className="form__radio">
            <input
              type="radio"
              name="weather"
              value="cold"
              checked={values.weather === "cold"}
              onChange={handleChange}
            />
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;