import React, { useState } from 'react';

const Game = () => {
  // Initialize state for grid colors and click sequence
  const initialGrid = Array(9).fill('blue');
  const [gridColors, setGridColors] = useState(initialGrid);
  const [clickSequence, setClickSequence] = useState([]);

  // Handle square click
  const handleSquareClick = (index) => {
    if (gridColors[index] === 'red') return; // Ignore if already red

    const newGrid = [...gridColors];
    newGrid[index] = 'red';

    setGridColors(newGrid);
    setClickSequence([...clickSequence, index]);
  };

  // Handle the special case when the last square is clicked
  const handleLastSquareClick = () => {
    if (gridColors[8] === 'red') return; // Ignore if already red

    const newGrid = [...gridColors];
    clickSequence.forEach((index, i) => {
      setTimeout(() => {
        newGrid[index] = 'blue';
        setGridColors([...newGrid]); // Update the state step by step
      }, i * 500); // 500ms delay between each color change
    });

    setTimeout(() => {
      newGrid[8] = 'red'; // Change the last square to red after sequence
      setGridColors([...newGrid]);
      setClickSequence([]); // Clear the sequence after completing the process
    }, clickSequence.length * 500);
  };

  return (
    <div className="grid grid-cols-3 gap-3 py-9 px-8 shadow-lg bg-gray-200 rounded-lg">
      {gridColors.map((color, index) => (
        <div
          key={index}
          onClick={() =>
            index === 8 ? handleLastSquareClick() : handleSquareClick(index)
          }
          className={`w-24 h-24 flex items-center justify-center border border-gray-300 cursor-pointer rounded-md ${
            color === 'blue' ? 'bg-blue-500' : 'bg-red-500'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Game;
