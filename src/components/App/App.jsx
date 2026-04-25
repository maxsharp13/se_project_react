import "./App.css";
import { useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ItemModal from "../ItemModal/ItemModal";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    useState("F");

  const [selectedCard, setSelectedCard] = useState(null);


  const [clothingItems, setClothingItems] = useState([
    {
      _id: "1",
      name: "T-Shirt",
      weather: "warm",
      imageUrl: "/shirt.svg",
      likes: [],
    },
    {
      _id: "2",
      name: "Shorts",
      weather: "warm",
      imageUrl: "/shorts.svg",
      likes: [],
    },
    {
      _id: "3",
      name: "Sneakers",
      weather: "warm",
      imageUrl: "/shoes.svg",
      likes: [],
    },
  ]);

  const weather = {
    temperature: { F: 66, C: 19 },
    condition: "warm",
  };


  const handleCardClick = (item) => {
    setSelectedCard(item);
    setActiveModal("preview");
  };


  const handleCardLike = ({ id, isLiked }) => {
    setClothingItems((items) =>
      items.map((item) =>
        item._id === id
          ? {
              ...item,
              likes: isLiked ? [] : ["user"], 
            }
          : item
      )
    );
  };


  const handleAddItem = (newItem) => {
    setClothingItems((prev) => [newItem, ...prev]);
  };


  const handleDeleteItem = (id) => {
    setClothingItems((items) =>
      items.filter((item) => item._id !== id)
    );

    closeActiveModal();
  };


  const handleAddClick = () => setActiveModal("add-item");
  const handleLoginClick = () => setActiveModal("login");
  const handleRegisterClick = () => setActiveModal("register");

  const closeActiveModal = () => {
    setActiveModal("");
    setSelectedCard(null);
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, setCurrentTemperatureUnit }}
    >
      <div className="page">
        <div className="page__wrapper">
          <Header
            onAddClick={handleAddClick}
            onLoginClick={handleLoginClick}
            onRegisterClick={handleRegisterClick}
            isLoggedIn={isLoggedIn}
            city="New York"
          />

          <Main
            clothingItems={clothingItems}
            weather={weather}
            isLoggedIn={isLoggedIn}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
          />

          <Footer />

      
          <AddItemModal
            isOpen={activeModal === "add-item"}
            onClose={closeActiveModal}
            onAddItem={handleAddItem}
          />

          <LoginModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
          />


          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={closeActiveModal}
          />


          <ItemModal
            isOpen={activeModal === "preview"}
            onClose={closeActiveModal}
            card={selectedCard}
            onDelete={handleDeleteItem}
          />
        </div>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;