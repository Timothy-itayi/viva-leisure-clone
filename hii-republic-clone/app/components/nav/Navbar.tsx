'use client';

import { useState } from 'react';
import Hamburger from './Hamburger'; // Assuming you have a Hamburger component
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed w-full'>
    <div className="bg-black text-white flex justify-between items-center px-8 py-4 relative">
      {/* Logo */}
      <div className=" items-center static">
      <Link href="/">
      <Image
  src="/assets/republic-logo.png"
  width={200}
  height={200}
  alt="hiit republic logo"
  className="w-[200px] h-[auto]" // Fixed width and height
/>

  </Link>
      </div>

      {/* Hamburger button for small screens */}
      <div className="sm:hidden absolute top-4 right-4">
        <button onClick={toggleHamburger} className="focus:outline-none z-20 ">
          <Hamburger isOpen={isOpen} />
        </button>
      </div>

      {/* Full menu for larger screens, hamburger for mobile */}
      <div
        className={`absolute left-0 w-full bg-black bg-opacity-90 transition-all duration-300 ease-in-out z-10 sm:relative sm:h-auto sm:bg-transparent sm:flex sm:justify-center sm:items-center ${
          isOpen ? 'top-[110px] opacity-100 translate-x-0' : 'top-0 opacity-0 -translate-x-full'
        } sm:opacity-100 sm:translate-x-0 sm:top-auto`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 text-lg">
          <li className="py-2">
            <Link href="/" className="text-white text-sm font-regular hover:text-[#ff6c3a]">
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link href="/studio" className="text-white text-sm font-regular hover:text-[#ff6c3a]">
              Studios
            </Link>
          </li>
          <li className="py-2">
            <Link href="" className="text-white text-sm font-regular hover:text-[#ff6c3a]">
              About
            </Link>
          </li>
          <li className="py-2">
            <Link href="https://timothyitayi.com" className="text-white text-sm font-regular hover:text-[#ff6c3a]">
              Contact us
            </Link>
          </li>
  
        </ul>
      </div>

      {/* Buttons on the right (only visible on larger screens) */}
      <div className="hidden sm:flex space-x-4">
     

        
      </div>
    </div>
    </div>
  );
}
