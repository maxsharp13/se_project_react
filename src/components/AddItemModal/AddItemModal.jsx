import "./Modal.css";
import useForm from "../../hooks/useForm";

function AddItemModal({ isOpen, onClose, onAddItem }) {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem({
      _id: Date.now().toString(),
      name: values.name,
      imageUrl: values.imageUrl,
      weather: values.weather,
      likes: [],
    });

    resetForm(); 
    onClose();
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
          </fieldset>

          <button
            type="submit"
            className="form__submit"
            disabled={
              !values.name ||
              !values.imageUrl ||
              !values.weather
            }
          >
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItemModal;