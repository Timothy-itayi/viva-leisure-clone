import React from 'react';
import Navbar from '../components/nav/Navbar';

const Studios = () => {
  return (
    <><Navbar /><div className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Studios</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Studio Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Location 1</h2>
              <p className="text-gray-600 mt-2">123 Main Street, City, State</p>
              <p className="text-gray-600 mt-1">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Studio Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Location 2</h2>
              <p className="text-gray-600 mt-2">456 Another St, City, State</p>
              <p className="text-gray-600 mt-1">Phone: (987) 654-3210</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Studio Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Location 3</h2>
              <p className="text-gray-600 mt-2">789 Some Rd, City, State</p>
              <p className="text-gray-600 mt-1">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Studio Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Location 4</h2>
              <p className="text-gray-600 mt-2">321 Old St, City, State</p>
              <p className="text-gray-600 mt-1">Phone: (444) 567-1234</p>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Studios;
