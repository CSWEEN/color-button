import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpace(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        aria-checked={disabled}
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />

      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
