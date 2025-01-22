import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import ReactTypingEffect from 'react-typing-effect';

const Page2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[url(https://i.pinimg.com/736x/7e/50/3d/7e503d3ef0813ba0ac34c8b2ca525663.jpg)] bg-cover">
      <a href="/">
        <img className="absolute top-0 left-0 mt-5 ml-5 h-6 w-6 cursor-pointer" src={assets.back}/>
      </a>
      <div className="grid grid-cols-1">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-4">
            <ReactTypingEffect
                text={["LET THE GAME BEGIN"]}
                speed={50}
                eraseSpeed={25}
                typingDelay={100}
              />
          </h1>
        </div>
        <div className="flex justify-center items-center">  
          <button
            className="border border-white bg-white text-black px-6 py-2 rounded-md shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
            onClick={handleClick}
          >
            Start
          </button>
        </div>

        <div
          className={`absolute inset-0 bg-black bg-opacity-90 flex justify-center items-center transition-all ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div className="flex justify-between items-center space-x-8 bg-black p-6 rounded-lg shadow-xl max-w-5xl w-full">
            <div className="w-1/3 flex justify-center">
              <img
                src={assets.man1}
                alt="Left Illustration"
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>

            <div 
              className="w-1/3 text-center"
            >
              <p
                className='text-xl font-semibold text-white transition-al'
              >
                Atul Pathak
              </p>
              <p
                className='text-sm text-white transition-all'
              >
                20235022
              </p>

              <div className="mt-4">
                <img
                  className="h-50 w-45 mx-auto border-4 border-gray-200 shadow-md hover:scale-105 transition-transform duration-300"
                  src={assets.mypic1}
                  alt="Atul"
                />
              </div>

              <div className="flex justify-center items-center mt-4 space-x-4">
                <a
                  href="https://www.instagram.com/atul_pathak03/"
                  className="hover:scale-110 transition"
                >
                  <img
                    className="h-8 w-8"
                    src={assets.insta}
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>

            <div className="w-1/3 flex justify-center">
              <img
                src={assets.man2}
                alt="Right Illustration"
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>
          </div>

          <button
            className="absolute top-6 right-6 text-white bg-red-500 px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition"
            onClick={handleClick}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
