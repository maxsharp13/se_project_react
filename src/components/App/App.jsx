import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; 

import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile"; 
import Footer from "../Footer/Footer";

import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ItemModal from "../ItemModal/ItemModal";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import {
  getItems,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
  getUserInfo,
} from "../../utils/api";

import { login, register } from "../../utils/auth";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    useState("F");

  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingItems, setClothingItems] = useState([]);

  const weather = {
    temperature: { F: 66, C: 19 },
    condition: "warm",
  };

  useEffect(() => {
    getItems()
      .then(setClothingItems)
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      getUserInfo(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  const handleLoginClick = () => setActiveModal("login");
  const handleRegisterClick = () => setActiveModal("register");
  const handleAddClick = () => setActiveModal("add-item");

  const closeActiveModal = () => {
    setActiveModal("");
    setSelectedCard(null);
  };

  const handleLogin = ({ email, password }) => {
    login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return getUserInfo(res.token);
      })
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleRegister = ({ email, password, name, avatar }) => {
    register(email, password, name, avatar)
      .then(() => handleLogin({ email, password }))
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    const request = isLiked
      ? removeCardLike(id, token)
      : addCardLike(id, token);

    request
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((item) =>
            item._id === id ? updatedCard : item
          )
        );
      })
      .catch(console.error);
  };

  const handleAddItem = (newItem) => {
    const token = localStorage.getItem("jwt");

    addItem(newItem, token)
      .then((item) => {
        setClothingItems((prev) => [item, ...prev]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (id) => {
    const token = localStorage.getItem("jwt");

    deleteItem(id, token)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== id)
        );
      })
      .catch(console.error);

    closeActiveModal();
  };

  const handleCardClick = (item) => {
    setSelectedCard(item);
    setActiveModal("preview");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, setCurrentTemperatureUnit }}
      >
        <div className="page">
          <Header
            isLoggedIn={isLoggedIn}
            onLoginClick={handleLoginClick}
            onRegisterClick={handleRegisterClick}
            onAddClick={handleAddClick}
            city="New York"
          />

  
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  weather={weather}
                  isLoggedIn={isLoggedIn}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
          </Routes>

          <Footer />

          <LoginModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
            onLogin={handleLogin}
            onRegisterClick={handleRegisterClick}
          />

          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={closeActiveModal}
            onRegister={handleRegister}
            onLoginClick={handleLoginClick}
          />

          <AddItemModal
            isOpen={activeModal === "add-item"}
            onClose={closeActiveModal}
            onAddItem={handleAddItem}
          />

          <ItemModal
            isOpen={activeModal === "preview"}
            onClose={closeActiveModal}
            card={selectedCard}
            onDelete={handleDeleteItem}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;