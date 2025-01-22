import React from 'react';
import { assets } from '../assets/assets';
import Game from '../components/Game';

const Page1 = () => {
  return (
    <div className="flex justify-center items-center gap-4 h-screen p-4">
      {/* Div 1 with gradient */}
      <div className="flex-1 h-96 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
        {/* Content inside div 1 can be added here */}
      </div>
      
      {/* Div 2 with an image */}
      <div className="flex-1 h-96 rounded-lg overflow-hidden border border-black">
        <img
          src={assets.logo}
          alt="Placeholder"
          className="w-full h-full object-fill"
        />
      </div>
      
      {/* Div 3 with the Game component */}
      <div className="flex-1 h-96 rounded-lg overflow-hidden border border-black">
        <Game />
      </div>
    </div>
  );
};

export default Page1;
