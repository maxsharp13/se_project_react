import "./Modal.css";
import { useState } from "react";

function AddItemModal({ isOpen, onClose, onAddItem }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem({
      _id: Date.now().toString(),
      name,
      imageUrl,
      weather,
      likes: [],
    });

    onClose();
    setName("");
    setImageUrl("");
    setWeather("");
  };

  return (
    <div className="modal modal_is-opened" onClick={onClose}>
      <div
        className="modal__content modal__content_type_form"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal__title">Add new clothing</h2>

        <form className="form" onSubmit={handleSubmit}>
 
          <label className="form__label">
            Name
            <input
              type="text"
              className="form__input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

  
          <label className="form__label">
            Image
            <input
              type="url"
              className="form__input"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </label>


          <fieldset className="form__fieldset">
            <legend className="form__legend">
              Select the weather type:
            </legend>

            <label className="form__radio">
              <input
                type="radio"
                name="weather"
                value="hot"
                onChange={(e) => setWeather(e.target.value)}
              />
              Hot
            </label>

            <label className="form__radio">
              <input
                type="radio"
                name="weather"
                value="warm"
                onChange={(e) => setWeather(e.target.value)}
              />
              Warm
            </label>

            <label className="form__radio">
              <input
                type="radio"
                name="weather"
                value="cold"
                onChange={(e) => setWeather(e.target.value)}
              />
              Cold
            </label>
          </fieldset>

 
          <button
            type="submit"
            className="form__submit"
            disabled={!name || !imageUrl || !weather}
          >
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItemModal;