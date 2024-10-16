'use client'
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white flex justify-between items-center px-8 py-4">
      <div className="flex items-center">
        <img
          src="https://placehold.co/150x50"
          alt="hiit republic logo"
          className="w-20"
        />
      </div>

      {/* Hamburger button for small screens */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Full menu for larger screens */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex space-x-6 text-lg sm:space-x-6 absolute sm:static left-0 top-16 sm:top-0 bg-black sm:bg-transparent w-full sm:w-auto p-4 sm:p-0`}
      >
        <li className="text-orange-500">Home</li>
        <li>Studios</li>
        <li>Classes</li>
        <li>Memberships</li>
        <li>About</li>
        <li>Contact us</li>
        <li>SHOWDOWN</li>
      </ul>

      {/* Buttons on the right */}
      <div className="hidden sm:flex space-x-4">
        <button className="border-2 border-white px-4 py-2">LOGIN</button>
        <button className="bg-white text-black px-4 py-2">JOIN NOW</button>
      </div>
    </nav>
  );
}
