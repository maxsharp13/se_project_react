import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";

import logo from "../../assets/Logo (1).svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  onAddClick,
  onRegisterClick,
  onLoginClick,
  city,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const userInitial = currentUser?.name
    ? currentUser.name[0].toUpperCase()
    : "U";

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">
          <img src={logo} alt="WTWR logo" />
        </Link>

        <span className="header__date-location">
          {date}, {city}
        </span>
      </div>

      <div className="header__right">
        <ToggleSwitch />

        {isLoggedIn ? (
          <>
            <button
              className="header__add-button"
              onClick={onAddClick}
            >
              + Add clothes
            </button>

            <div className="header__user">
              <span className="header__username">
                {currentUser?.name || "User"}
              </span>

              {currentUser?.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt="User avatar"
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  {userInitial}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <button className="header__auth-button" onClick={onRegisterClick}>
              Sign Up
            </button>
            <button className="header__auth-button" onClick={onLoginClick}>
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;