import React from 'react';
import locations from '../data/locations';
const Studios  = () => {


  return (
    <div className="px-6 py-8">
      <div className="flex justify-between items-center mb-8  ">
        <h1 className="text-6xl font-bold">19<br />LOCATIONS</h1>
        <div>
          <input type="text" placeholder="Search for..." className="bg-white text-black px-4 py-2 rounded-full w-64" />
          <p className="text-right mt-2">PHONE: 131244</p>
          <p className="text-right">info@hiitrepublic.com.au</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-2"><span className="bg-white text-black px-1 mr-2">HR</span>{location.name}</h2>
            <p className="mb-4 whitespace-pre-line">{location.address}</p>
            <button className="border border-red-500 text-red-500 px-4 py-2 hover:bg-red-500 hover:text-white transition-colors">MORE INFO</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studios;
