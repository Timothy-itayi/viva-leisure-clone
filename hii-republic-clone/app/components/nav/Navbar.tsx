'use client'
import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import Link from 'next/link';
import Image from 'next/image'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);



  const toggleHamburger = () => {
    setIsOpen( !isOpen)
  }
  return (
    <nav className="bg-black text-white flex justify-between items-center px-8 py-4">
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
        <button
          onClick={(toggleHamburger)}
        >
            <Hamburger/>
        </button>
      </div>

      {/* Full menu for larger screens */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        }  sm:flex space-x-6 text-lg sm:space-x-6 absolute sm:static left-0 top-16 sm:bg-black sm:bg-transparent w-full sm:w-auto p-4 sm:p-0`}
      ><li>   <Link href="/" className="text-white text-sm font-family:regular line-height: 20px  hover:text-[#ff6c3a]">Home</Link >
        </li>
      <li>  <Link href="/studio" className="text-white text-sm font-family:regular line-height: 20px  hover:text-[#ff6c3a]">Studios</Link >
       </li>
      <li>   <Link href="" className="text-white text-sm font-family:regular line-height: 20px  hover:text-[#ff6c3a]">About</Link >
       </li>
      <li>   <Link href=""className="text-white text-sm font-family:regular line-height: 20px  hover:text-[#ff6c3a]" >Contact us</Link >
    </li>
      <li>     <Link href="" className="text-white text-sm font-family:regular line-height: 20px  hover:text-[#ff6c3a]">SHOWDOWN</Link >    </li>

       
      </ul>

      {/* Buttons on the right */}
      <div className="hidden sm:flex space-x-4">
        <button className="border-2 border-white px-4 py-2">LOGIN</button>
        <button className="bg-white text-black px-4 py-2">JOIN NOW</button>
      </div>
    </nav>
  );
}
