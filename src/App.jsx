import React, { useState } from "react";
import { evaluate } from "mathjs";
import clickSound from './assets/click.mp3';
import errorSound from './assets/error.mp3' // Import the audio file

const App = () => {
  const [input, setInput] = useState("");
  const click = new Audio(clickSound); // Create a new Audio instance
  const error = new Audio(errorSound); // Create a new Audio instance

  const buttons = [
    ["C", "", "", "BS"],
    [1, 2, 3, "+"],
    [4, 5, 6, "-"],
    [7, 8, 9, "*"],
    [0, ".", "=", "/"],
  ];

  const playClickSound = () => {
    click.currentTime = 0; // Reset the sound to start from the beginning
    click.play();
  };
  const playErrorSound = () => {
    error.currentTime = 0; // Reset the sound to start from the beginning
    error.play();
  };

  function handleClickButton(value) {
    setInput(input + value);
    playClickSound(); // Play sound on button press
  }

  function handleBackspace() {
    setInput(input.slice(0, -1));
    playClickSound(); // Play sound on button press
  }

  function handleClearAll() {
    setInput("");
    playClickSound(); // Play sound on button press
  }
  
  function handleEqual() {
    try {
      const result = evaluate(input).toString();
      setInput(result);
      playClickSound(); // Play sound on button press
    } catch {
      playErrorSound()
      setInput("Error");
      alert("Error: " + "Hmmm Bhuttt Teej Ho rahee HO "! 😂😂👌");
    }
  }

  return (

  
    <>
      <h1 className="text-4xl font-bold text-center text-blue-600 my-6">
        Calculator
      </h1>

      <div className="flex justify-center">
        <input
        readOnly
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-3/4 p-4 text-2xl border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0"
        />
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-between mb-3">
            {row.map((button, colIndex) => (
              <button
                value={button}
                onClick={() => {
                  if (button === "C") {
                    handleClearAll();
                  } else if (button === "BS") {
                    handleBackspace();
                  } else if (button === "=") {
                    handleEqual();
                  } else {
                    handleClickButton(button);
                  }
                  
                }}
                key={colIndex}
                className="w-16 h-16 bg-orange-500 text-white text-2xl font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {button}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
