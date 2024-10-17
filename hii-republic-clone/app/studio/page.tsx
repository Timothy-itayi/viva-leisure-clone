import React from 'react';
import locations from '../data/locations';
import Card from './components/card'; // Import the Card component

const Studios: React.FC = () => {
  return (
    <div className='py-10'>
      <div className="py-20 px-9">
        <div className="border-b flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">19<br />LOCATIONS</h1>
          {/* Centering the search bar */}
          <div className="flex flex-col items-center sm:text-right">
            <input
              type="text"
              placeholder="Search for..."
              className="bg-white text-black px-4 py-2 rounded-full w-64 mb-4"
            />
            <p className="mt-2">PHONE: 131244</p>
            <p>info@hiitrepublic.com.au</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <Card key={index} title={location.name} address={location.address} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Studios;
