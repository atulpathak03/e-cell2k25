import React from 'react';
import { assets } from '../assets/assets';
import Game from '../components/Game';

const Page1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center gap-4 h-screen p-4">      {/* Div 1 with gradient */}
      <div className="flex-1 h-96 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
      </div>
      
      <div className="flex-1 h-96 rounded-lg overflow-hidden border border-black">
        <img
          src={assets.logo}
          alt="Placeholder"
          className="w-full h-full object-fill"
        />
      </div>
      
      <div className="flex-1 h-96 rounded-lg overflow-hidden border border-black">
        <Game />
      </div>
    </div>
  );
};

export default Page1;
