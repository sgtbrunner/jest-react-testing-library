import React, { useState } from "react";

export const replaceCamelWithSpaces = (colorName) =>
  colorName.replace(/\B([A-Z])\B/g, " $1");

const RED = "MediumVioletRed";
const BLUE = "MidnightBlue";
const GRAY = "gray";

const App = () => {
  const [buttonColor, setButtonColor] = useState(RED);
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === RED ? BLUE : RED;

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? GRAY : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <label htmlFor="disable-button-checkbox">Disable input</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onClick={(event) => setDisabled(event.target.checked)}
      />
    </div>
  );
};

export default App;
