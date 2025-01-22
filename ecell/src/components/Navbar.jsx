import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-end gap-4 text-sm py-5 z-10 pr-6 shadow-md bg-white">
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <NavLink to="/" className="group">
          <li className="py-1 group-hover:underline">Home</li>
          <hr className="border-none outline-none bg-black w-3/5 m-auto hidden group-hover:block" />
        </NavLink>
        <NavLink to="/doctors" className="group">
          <li className="py-1 group-hover:underline">Grid</li>
          <hr className="border-none outline-none bg-black w-3/5 m-auto hidden group-hover:block" />
        </NavLink>
        <a 
          href="https://www.linkedin.com/in/atul-pathak03/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group"
        >
          <li className="py-1 group-hover:underline">Linkedln</li>
          <hr className="border-none outline-none bg-black w-3/5 m-auto hidden group-hover:block" />
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
