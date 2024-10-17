'use client';

import { useState } from 'react';
import Hamburger from './Hamburger';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white flex justify-between items-center px-8 py-4">
      <div className="flex items-center">
        <Image
          src="/assets/republic-logo.png"
          width={190}
          height={100}
          alt="hiit republic logo"
          className=""
        />
      </div>
      {/* Hamburger button for small screens */}
      <div className="sm:hidden">
        <button onClick={toggleHamburger} className="focus:outline-none">
          <Hamburger isOpen={isOpen} />
        </button>
      </div>
      {/* Full menu for larger screens */}
      
      <div className={`fixed  inset-0 z-50 bg-black bg-opacity-90 transition-all duration-300 ease-in-out sm:relative sm:z-auto sm:bg-transparent ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 text-lg">
        <li className="py-2">
          <Link
            href="/"
            className="text-white text-sm font-regular hover:text-[#ff6c3a]"
          
          >
            Home
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/studio"
            className="text-white text-sm font-regular hover:text-[#ff6c3a]"
          
          >
            Studios
          </Link>
        </li>
        <li className="py-2">
          <Link
            href=""
            className="text-white text-sm font-regular hover:text-[#ff6c3a]"
          
          >
            About
          </Link>
        </li>
        <li className="py-2">
          <Link
            href=""
            className="text-white text-sm font-regular hover:text-[#ff6c3a]"
          
          >
            Contact us
          </Link>
        </li>
        <li className="py-2">
          <Link
            href=""
            className="text-white text-sm font-regular hover:text-[#ff6c3a]"
          
          >
            SHOWDOWN
          </Link>
        </li>
      </ul>
      </div>
      {/* Buttons on the right */}
      <div className="hidden sm:flex space-x-4">
        <button className="border-2 border-white px-4 py-2">LOGIN</button>
        <button className="bg-white text-black px-4 py-2">JOIN NOW</button>
      </div>
    </div>
  );
}
