import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ onAddClick, city, avatar }) {
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
      <Link to="/" className="header__logo">
           WTWR
      </Link>


        <span className="header__date-and-location">
          {date}, {city}
        </span>
      </div>

      <ToggleSwitch />

      <div className="header__right">
        <button
          type="button"
          className="header__add-button"
          onClick={onAddClick}
        >
          + Add Clothes
        </button>
        <Link to="/profile" className="header__user">
          <span className="header__username">Jacques Cousteau</span>

          <img src={avatar} alt="User avatar" className="header__avatar" />
        </Link>

      </div>
    </header>
  );
}

export default Header;
