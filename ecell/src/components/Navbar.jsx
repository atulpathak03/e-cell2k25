import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false); 

  return (
    <div className="flex items-center justify-end gap-4 text-sm py-5 z-10 pr-6 shadow-md bg-white">
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <NavLink to="/page2" className="group">
          <li className="py-1 group-hover:underline">Home</li>
          <hr className="border-none outline-none bg-black w-3/5 m-auto hidden group-hover:block" />
        </NavLink>
        <NavLink to="/" className="group">
          <li className="py-1 group-hover:underline">Grid</li>
          <hr className="border-none outline-none bg-black w-3/5 m-auto hidden group-hover:block" />
        </NavLink>
        <a 
          href="https://www.linkedin.com/in/atul-pathak03/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group"
        >
          <li className="py-1 group-hover:underline">LinkedIn</li>
          <hr className="border-none outline-none bg-black w-3/5 m-auto hidden group-hover:block" />
        </a>
      </ul>

      <img
        onClick={() => setVisible(true)}
        src={assets.menu}
        className="w-5 cursor-pointer sm:hidden"
        alt="Menu"
      />
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 ${
          visible ? "w-full z-50" : "w-0 overflow-hidden"
        } sm:hidden`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img
              className="h-4 rotate-180 cursor-pointer"
              src={assets.cross1}
              alt="Back"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/page2"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Grid
          </NavLink>
          <a
            href="https://www.linkedin.com/in/atul-pathak03/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
