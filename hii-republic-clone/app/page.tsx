'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <html>
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
    </head>
    <body className="bg-black">
   <Navbar/>
  
      <section className="relative bg-orange-600 text-white h-screen">
        <div className="absolute top-0 left-8 mt-8">
          <img
            src="https://placehold.co/200x50"
            alt="hiit republic logo"
            className="w-32"
          />
        </div>
  
        <div className="flex flex-col items-start px-8 pt-20">
          <h1 className="text-8xl font-bold">
            <span className="block">7</span>
            <span className="block">DAY</span>
            <span className="block">FREE</span>
            <span className="block">TRIAL</span>
          </h1>
          <p className="text-sm mt-4">T&Cs Apply</p>
        </div>
  
        <div className="absolute bottom-0 right-0 mr-8 mb-8">
          <img
            src="https://placehold.co/400x400"
            alt="woman pushing a sled in the gym"
            className="w-64"
          />
        </div>
      </section>
  
      <div className="absolute bottom-4 right-4">
        <div className="bg-black p-4 rounded-full text-white text-lg">
          <i className="fas fa-comment-dots"></i>
        </div>
        <p className="text-white">Hi. How can we help?</p>
      </div>
    </body>
  </html>
  
  );
}
