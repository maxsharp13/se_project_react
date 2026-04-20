import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext,
  );

  const isF = currentTemperatureUnit === "F";

  return (
    <label className="toggle">
      <input
        type="checkbox"
        className="toggle__input"
        checked={!isF}
        onChange={handleToggleSwitchChange}
      />

      <div className="toggle__slider">
        <div
          className={`toggle__circle ${
            isF ? "toggle__circle--left" : "toggle__circle--right"
          }`}
        />

        <span className={`toggle__label ${isF ? "toggle__label--active" : ""}`}>
          F
        </span>

        <span
          className={`toggle__label ${!isF ? "toggle__label--active" : ""}`}
        >
          C
        </span>
      </div>
    </label>
  );
}

export default ToggleSwitch;
