import "./Header.css";

function Header({ onAddClick, city, avatar }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <span className="header__logo">WTWR</span>

        <span className="header__date-and-location">
          {date}, {city}
        </span>
      </div>

      <div className="header__right">
        <button
          type="button"
          className="header__add-button"
          onClick={onAddClick}
        >
          + Add Clothes
        </button>

        <div className="header__user">
          <span className="header__username">Jacques Cousteau</span>

          <img src={avatar} alt="User avatar" className="header__avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
