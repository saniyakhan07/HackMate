import React, { useState } from "react";
import logo from '../../assets/Photos/Heritage.png'


function Navbar() {
  return (
    <nav className="bg-black text-white w-full">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 object-cover"
          />
          <span className="text-lg font-bold">Hackmate</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Login Button */}
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Login
        </button>

        {/* Mobile Menu Button (Optional) */}
        <button className="md:hidden text-gray-400 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

