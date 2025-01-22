import React, { useState } from 'react';

const Game = () => {
  const initialGrid = Array(9).fill('blue');
  const [gridColors, setGridColors] = useState(initialGrid);
  const [clickSequence, setClickSequence] = useState([]);

  const handleSquareClick = (index) => {
    if (gridColors[index] === 'red') return;

    const newGrid = [...gridColors];
    newGrid[index] = 'red';

    setGridColors(newGrid);
    setClickSequence([...clickSequence, index]);
  };

  const handleLastSquareClick = () => {
    const newGrid = [...gridColors];

    if (newGrid[8] === 'red') {
      newGrid[8] = 'blue'; 
      setClickSequence([]); 
    } else {
      clickSequence.forEach((index, i) => {
        setTimeout(() => {
          newGrid[index] = 'blue';
          setGridColors([...newGrid]);
        }, i * 500);
      });

      setTimeout(() => {
        newGrid[8] = 'red'; 
        setGridColors([...newGrid]);
        setClickSequence([]); 
      }, clickSequence.length * 500);
    }

    setGridColors(newGrid);
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
