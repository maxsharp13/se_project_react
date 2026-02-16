import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import {
  getWeather,
  parseWeatherData,
  getWeatherCondition,
} from "../../utils/weatherApi";

import { getItems, addItem, deleteItem } from "../../utils/api";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const [weather, setWeather] = useState({
    temperature: null,
    city: "",
    condition: "",
  });

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) =>
      prev === "F" ? "C" : "F"
    );
  };

  const handleAddItem = (item, resetForm) => {
    addItem(item)
      .then((newItem) => {
        setClothingItems((prevItems) => [
          newItem,
          ...prevItems,
        ]);
        resetForm();
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (card) => {
    deleteItem(card._id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter(
            (item) => item._id !== card._id
          )
        );
        handleCloseModal();
      })
      .catch(console.error);
  };

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

    return () =>
      document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getWeather()
      .then((data) => {
        const weatherData = parseWeatherData(data);
        const condition = getWeatherCondition(
          weatherData.temperature.F
        );
  
        setWeather({
          ...weatherData,
          condition,
        });
      })
      .catch(console.error);
  }, []);


  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{
          currentTemperatureUnit,
          handleToggleSwitchChange,
        }}
      >
        <div className="page__wrapper">
          <Header
            onAddClick={handleOpenAddModal}
            city={weather.city}
            avatar="src/assets/Ellipse 18.svg"
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                  weather={weather}
                />
              }
            />

<Route
  path="/profile"
  element={
    <Profile
      clothingItems={clothingItems}
      onAddClick={handleOpenAddModal}
      onCardClick={handleCardClick}
    />
  }
/>
          </Routes>

          <Footer />
        </div>

        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onCloseModal={handleCloseModal}
          onAddItem={handleAddItem}
        />

        <ItemModal
          isOpen={activeModal === "preview"}
          onClose={handleCloseModal}
          card={selectedCard}
          onDelete={handleDeleteItem}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
