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
      <input
        type="checkbox"
        onClick={(event) => setDisabled(event.target.checked)}
      />
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
};

export default App;
