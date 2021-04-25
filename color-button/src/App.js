import React, { useState } from "react";

const RED = "red";
const BLUE = "blue";

const App = () => {
  const [buttonColor, setButtonColor] = useState(RED);
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === RED ? BLUE : RED;

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
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
