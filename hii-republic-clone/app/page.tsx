'use client';

import Navbar from './components/nav/Navbar';

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      {/* Background Image Div */}
      <div className="h-screen bg-cover bg-center bg-[url('/assets/home-page.jpg')] sm:bg-cover md:bg-center lg:bg-right">
        {/* Responsive content over the background image */}
      </div>
    </div>
  );
}
