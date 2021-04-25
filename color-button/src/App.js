import React, { useState } from "react";

const RED = "red";
const BLUE = "blue";

const App = () => {
  const [buttonColor, setButtonColor] = useState(RED);
  const newButtonColor = buttonColor === RED ? BLUE : RED;

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
};

export default App;
