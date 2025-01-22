import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const Page2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div>
        <button
          className="border border-white bg-white text-black px-6 py-2 rounded-md shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          onClick={handleClick}
        >
          Click
        </button>

        {/* The modal */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-90 flex justify-center items-center transition-all ${
            isVisible ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex justify-between items-center space-x-8 bg-black p-6 rounded-lg shadow-xl max-w-5xl w-full">
            {/* Left Section */}
            <div className="w-1/3 flex justify-center">
              <img
                src={assets.man1}
                alt="Left Illustration"
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>

            {/* Middle Section */}
            <div className="w-1/3 text-center">
              <p className="text-xl font-semibold text-gray-800">Atul Pathak</p>
              <p className="text-sm text-gray-600">20235022</p>
              <div className="mt-4">
                <img
                  className="h-32 w-32 rounded-full mx-auto border-4 border-gray-200 shadow-md"
                  src={assets.mypic1}
                  alt="Atul"
                />
              </div>
              <div className="flex justify-center items-center mt-4 space-x-4">
                <a href="#" className="hover:scale-110 transition">
                  <img
                    className="h-8 w-8"
                    src={assets.insta}
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-1/3 flex justify-center">
              <img
                src={assets.man2}
                alt="Right Illustration"
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Close button */}
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
