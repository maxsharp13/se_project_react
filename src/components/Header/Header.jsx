import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo (1).svg";

function Header({ onAddClick, city, avatar }) {
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      
      <div className="header__left">
      <Link to="/" className="header__logo">
       <img
      src={logo}
      alt="WTWR logo"
      className="header__logo-image"
        />
      </Link>


        <span className="header__date-location">
          {date}, {city}
        </span>
      </div>

      <div className="header__right">
        <ToggleSwitch />

        <button
          type="button"
          className="header__add-button"
          onClick={onAddClick}
        >
          + Add Clothes
        </button>

        <Link to="/profile" className="header__profile">
          <span className="header__username">
            Jacques Cousteau
          </span>

          <img
            src={avatar}
            alt="User avatar"
            className="header__avatar"
          />
        </Link>
      </div>

    </header>
  );
}

export default Header;
