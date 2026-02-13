import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } =
    useContext(CurrentTemperatureUnitContext);

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        onChange={handleToggleSwitchChange}
        checked={currentTemperatureUnit === "C"}
      />

      <span className="toggle-switch__slider" />

      <span className="toggle-switch__labels">
        <span
          className={`toggle-switch__label ${
            currentTemperatureUnit === "F"
              ? "toggle-switch__label_active"
              : ""
          }`}
        >
          F
        </span>

        <span
          className={`toggle-switch__label ${
            currentTemperatureUnit === "C"
              ? "toggle-switch__label_active"
              : ""
          }`}
        >
          C
        </span>
      </span>
    </label>
  );
}

export default ToggleSwitch;
