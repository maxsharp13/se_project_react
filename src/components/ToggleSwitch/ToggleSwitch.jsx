import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } =
    useContext(CurrentTemperatureUnitContext);

  const isFahrenheit = currentTemperatureUnit === "F";

  return (
    <label className="toggle">
      <input
        type="checkbox"
        checked={!isFahrenheit}
        onChange={handleToggleSwitchChange}
        className="toggle__input"
      />

      <span className="toggle__slider">
        <span
          className={`toggle__circle ${
            isFahrenheit ? "toggle__circle--left" : "toggle__circle--right"
          }`}
        />
        <span className="toggle__label toggle__label--left">F</span>
        <span className="toggle__label toggle__label--right">C</span>
      </span>
    </label>
  );
}

export default ToggleSwitch;
