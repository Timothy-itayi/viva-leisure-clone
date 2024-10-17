import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <div className="mx-auto px-10 bg-black text-white">
            <div className="flex flex-col md:flex-row justify-between mb-8 space-y-6 md:space-y-0 md:space-x-4">
                <div className="flex flex-col w-full md:w-1/4 mb-6 md:mb-0">
                    <h2 className=" text-xl font-bold mb-4">About Us</h2>
                    <p className="text-sm text-left md:text-left text-center ">
                        Welcome to HIIT Republic Clone—where we pretend to be awesome! We may not be the real deal, 
                        but we’re all about high-energy workouts, silly dance breaks, 
                        and pretending we know what we’re doing. 
                        Join our band of fitness impersonators as we sweat it out, 
                        share questionable fitness advice, and maybe even drop a few “dad jokes” along the way. 
                        Remember, every clone has its charm, and ours is just a bit goofier!
                    </p>
                </div>
                <div className="flex flex-col w-full md:w-1/4 mb-6 md:mb-0 text-center">
                    <h2 className="text-xl font-bold mb-4 footer-title-font">Social Links</h2>
                    <ul className="text-sm">
                        <li className="mb-2 hover:text-[#ff6c3a]">Instagram</li>
                        <li className="mb-2 hover:text-[#ff6c3a]" >Facebook</li>
                    </ul>
                </div>
                <div className="flex flex-col w-full md:w-1/4 mb-6 md:mb-0 text-center" >
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="text-sm ">
                        <li className="mb-2 hover:text-[#ff6c3a] ">Welcome to HIIT Republic</li>
                        <li className="mb-2 hover:text-[#ff6c3a]">Meet the Fit Fam</li>
                        <li className="mb-2 hover:text-[#ff6c3a]">Workout Wisdom</li>
                        <li className="mb-2 hover:text-[#ff6c3a]">Slide into Our DMs</li>
                        <li className="mb-2 hover:text-[#ff6c3a]">Lime Time Adventures</li>
                        <li className="mb-2 hover:text-[#ff6c3a]">Disclaimer: We Lift Heavy</li>
                    </ul>
                </div>
                <div className="flex justify-center items-start  md:w-1/4 mb-6 md:mb-0 text-center">
                    <Image
                        src="/assets/Hit-logo.jpg"
                        alt="hiit-logo"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
    
                {/* <div className='flex flex-row'>
                    <ul className=" space-x-4 text-sm">
                        <li><a href="#" className="text-orange-500">Home</a></li>
                        <li><a href="#" className="hover:text-orange-500">Studios</a></li>
                        <li><a href="#" className="hover:text-orange-500">Classes</a></li>
                        <li><a href="#" className="hover:text-orange-500">Memberships</a></li>
                        <li><a href="#" className="hover:text-orange-500">About</a></li>
                        <li><a href="#" className="hover:text-orange-500">Contact us</a></li>
                        <li><a href="#" className="hover:text-orange-500">SHOWDOWN</a></li>
                    </ul>
                </div> */}
                <div className="text-xs ">
                    © 2024 www.hiitrepublic.com.au. All rights reserved.
                </div>
            </div>
    
    );
};

export default Footer;
