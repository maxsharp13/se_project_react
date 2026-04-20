import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import {
  getWeather,
  parseWeatherData,
  getWeatherCondition,
} from "../../utils/weatherApi";

import {
  getItems,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
  updateUserProfile,
} from "../../utils/api";

import { register, login, checkToken } from "../../utils/auth";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

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
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) => (prev === "F" ? "C" : "F"));
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setSelectedCard(null);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleRegister = ({ name, avatar, email, password }) => {
    register({ name, avatar, email, password })
      .then(() => login({ email, password }))
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        return checkToken(res.token);
      })
      .then((user) => {
        setCurrentUser(user);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    login({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        return checkToken(res.token);
      })
      .then((user) => {
        setCurrentUser(user);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  const handleAddItem = (item, resetForm) => {
    const token = localStorage.getItem("jwt");

    addItem(item, token)
      .then((newItem) => {
        setClothingItems((prev) => [newItem, ...prev]);
        resetForm();
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (card) => {
    const token = localStorage.getItem("jwt");

    deleteItem(card._id, token)
      .then(() => {
        setClothingItems((prev) =>
          prev.filter((item) => item._id !== card._id),
        );
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    const request = isLiked
      ? removeCardLike(id, token)
      : addCardLike(id, token);

    request
      .then((updatedCard) => {
        setClothingItems((items) =>
          items.map((item) => (item._id === id ? updatedCard : item)),
        );
      })
      .catch(console.error);
  };

  const handleUpdateProfile = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");

    updateUserProfile({ name, avatar }, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        handleCloseModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getItems().then(setClothingItems).catch(console.error);
  }, []);

  useEffect(() => {
    getWeather()
      .then((data) => {
        const parsed = parseWeatherData(data);
        setWeather({
          ...parsed,
          condition: getWeatherCondition(parsed.temperature.F),
        });
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;

    checkToken(token)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch(() => localStorage.removeItem("jwt"));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onAddClick={() => setActiveModal("add")}
          onRegisterClick={() => setActiveModal("register")}
          onLoginClick={() => setActiveModal("login")}
          onSignOut={handleSignOut}
          city={weather.city}
          isLoggedIn={isLoggedIn}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                clothingItems={clothingItems}
                onCardClick={handleCardClick}
                weather={weather}
                onCardLike={handleCardLike}
                isLoggedIn={isLoggedIn}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  clothingItems={clothingItems.filter(
                    (i) => i.owner === currentUser._id,
                  )}
                  onAddClick={() => setActiveModal("add")}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  isLoggedIn={isLoggedIn}
                  onEditProfile={() => setActiveModal("edit")}
                  onSignOut={handleSignOut}
                />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />

        <RegisterModal
          isOpen={activeModal === "register"}
          onClose={handleCloseModal}
          onRegister={handleRegister}
          onLoginClick={() => setActiveModal("login")}
        />

        <LoginModal
          isOpen={activeModal === "login"}
          onClose={handleCloseModal}
          onLogin={handleLogin}
          onRegisterClick={() => setActiveModal("register")}
        />

        <EditProfileModal
          isOpen={activeModal === "edit"}
          onClose={handleCloseModal}
          onUpdateProfile={handleUpdateProfile}
        />

        <ItemModal
          isOpen={activeModal === "preview"}
          onClose={handleCloseModal}
          card={selectedCard}
          onDelete={handleDeleteItem}
        />

        <AddItemModal
          isOpen={activeModal === "add"}
          onCloseModal={handleCloseModal}
          onAddItem={handleAddItem}
        />
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
