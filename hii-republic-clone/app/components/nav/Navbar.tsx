'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './Hamburger';
import Drawer from './Drawer'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full">
      <div className="bg-black text-white flex  items-center px-8 py-4 relative">
        {/* Logo */}
        <div className="items-center static">
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
        <button
          onClick={toggleHamburger}
          className="focus:outline-none z-20 sm:hidden absolute top-4 right-4"
        >
          <Hamburger isOpen={isOpen} />
        </button>

        {/* Full menu for larger screens */}
   <div className=' flex-grow flex justify-center sm:flex hidden'>
   <ul className=" flex space-x-8 ">
            <li>
              <Link href="/" className="text-white text-sm font-regular hover:text-[#ff6c3a]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/studio" className="text-white text-sm font-regular hover:text-[#ff6c3a]">
                Studios
              </Link>
            </li>
       
            <li>
              <Link href="https://timothyitayi.com" className="text-white text-sm font-regular hover:text-[#ff6c3a]">
                Contact us
              </Link>
            </li>
          </ul>
 
   </div>
        

        {/* Drawer for mobile screens */}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          {/* Mobile version of the menu inside the drawer */}
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
            <Link href="https://timothyitayi.com" className="text-white text-sm font-regular hover:text-[#ff6c3a]">
              Contact us
            </Link>
          </li>
  
        </ul>
        </Drawer>
      </div>
    </div>
  );
}
