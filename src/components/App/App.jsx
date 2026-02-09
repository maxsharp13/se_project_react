import "./App.css";
import { useState, useEffect } from "react";
import {
  getWeather,
  parseWeatherData,
  getWeatherCondition,
} from "../../utils/weatherApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/clothingItems";

function App() {
  const [clothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [weather, setWeather] = useState({
    temperature: null,
    city: "",
    condition: "",
  });

  function handleCloseModal() {
    setActiveModal("");
    setSelectedCard(null);
  }

  function handleOpenAddModal() {
    setActiveModal("add-garment");
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setActiveModal("preview");
  }

  useEffect(() => {
    if (!activeModal) return;

    function handleEscClose(e) {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    getWeather()
      .then((data) => {
        const parsed = parseWeatherData(data);
        const condition = getWeatherCondition(parsed.temperature);

        setWeather({
          ...parsed,
          condition,
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
    <div className="page__wrapper">
      <Header
        onAddClick={handleOpenAddModal}
        city={weather.city}
        avatar="src/assets/Ellipse 18.svg"
      />

      <Main
        clothingItems={clothingItems}
        onCardClick={handleCardClick}
        weather={weather}
      />

      <Footer />
    </div>

      <ModalWithForm
        name="add-garment"
        title="New garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={handleCloseModal}
      >
        <label className="modal__label">
          Name
          <input type="text" name="name" className="modal__input" required />
        </label>

        <label className="modal__label">
          Image URL
          <input type="url" name="link" className="modal__input" required />
        </label>

        <p className="modal__label modal__label_type_weather">
          Select the weather type:
        </p>

        <div className="modal__radio-group">
          <label className="modal__radio-label">
            <input type="radio" name="weather" value="hot" required />
            Hot
          </label>

          <label className="modal__radio-label">
            <input type="radio" name="weather" value="warm" />
            Warm
          </label>

          <label className="modal__radio-label">
            <input type="radio" name="weather" value="cold" />
            Cold
          </label>
        </div>
      </ModalWithForm>

      <ItemModal
        isOpen={activeModal === "preview"}
        onClose={handleCloseModal}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
