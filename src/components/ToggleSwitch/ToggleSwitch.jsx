import "./ToggleSwitch.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, setCurrentTemperatureUnit } =
    useContext(CurrentTemperatureUnitContext);

  const handleToggle = () => {
    setCurrentTemperatureUnit(
      currentTemperatureUnit === "F" ? "C" : "F"
    );
  };

  return (
    <div className="toggle">
      <span
        className={`toggle__label ${
          currentTemperatureUnit === "F" ? "toggle__label_active" : ""
        }`}
      >
        F
      </span>

      <label className="toggle__switch">
        <input
          type="checkbox"
          checked={currentTemperatureUnit === "C"}
          onChange={handleToggle}
        />
        <span className="toggle__slider"></span>
      </label>

      <span
        className={`toggle__label ${
          currentTemperatureUnit === "C" ? "toggle__label_active" : ""
        }`}
      >
        C
      </span>
    </div>
  );
}

export default ToggleSwitch;