import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const App = () => {

  const [input,setInput] =useState('')
  console.log(input)
  const buttons = [
    ["C","" , "", 'BS'],
    [1, 2, 3, '+'],
    [4, 5, 6, '-'],
    [7, 8, 9, '*'],
    [0, '.', '=', '/'],
  ];

  function handleClickButton(value){
   
      setInput(input + value )
  }
function handleBackspace(){


  let newInput = input.slice(0, -1)
  setInput(newInput)
}
function handleClearAll(){
 
  setInput('')
}
function handleEqual(){
  let result = evaluate(input).toString()
  console.log(result)
  setInput(result)
}
  
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-600 my-6">Calculator</h1>

      <div className="flex justify-center">
        <input
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
              } else if  (button === "="){
                handleEqual();
              }else  {
                handleClickButton(button);
              }
            }}

          
       
                key={colIndex}
                className="w-16 h-16 bg-blue-500 text-white text-2xl font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
