'use client'
import React, { useState, useEffect } from 'react';
import locations from '../data/locations';
import Card from './components/card'; 

const Studios: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to manage search input
  const [filteredLocations, setFilteredLocations] = useState(locations); // State to manage filtered locations

  useEffect(() => {
    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredLocations(filtered); // Update the filtered locations based on the search query
  }, [searchQuery]); // Update when searchQuery changes

  return (
    <div className='py-10 bg-black'>
      <div className="py-20 px-9 bg-black">
        <div className="border-b flex flex-col sm:flex-row justify-between items-center mb-8">
          {/* Dynamically update the number of locations */}
          <h1 className="text-3xl font-bold">
            {filteredLocations.length} <br />
            LOCATIONS
          </h1>

          {/* Centering the search bar */}
          <div className="flex flex-col items-center sm:text-right">
            <input
              type="text"
              placeholder="Search for..."
              className="bg-white text-black px-4 py-2 rounded-full w-64 mb-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search input on change
            />
            <p className="mt-2">PHONE: 131244</p>
            <p>info@hiitrepublic.com.au</p>
          </div>
        </div>

        /* Display filtered locations */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredLocations.map((location, index) => (
            <Card key={index} title={location.name} address={location.address} imageSrc='/assets/hiit2.png' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Studios;
