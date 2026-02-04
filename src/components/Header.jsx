import "./Header.css";

function Header({ onAddClick, city }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <p className="header__logo">WTWR</p>

      <p className="header__date-and-location">
        {currentDate}, {city}
      </p>

      <button
        type="button"
        className="header__add-button"
        onClick={onAddClick}
      >
        + Add Clothes
      </button>

      <div className="header__user">
        <p className="header__username">Jacques Cousteau</p>
        <img
          src="https://i.pravatar.cc/40"
          alt="User avatar"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
