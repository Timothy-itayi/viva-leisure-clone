import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <span className="relative font-bold text-3xl text-white py-10 mb-10">Loading</span>
      <div className="relative flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-gray-300 animate-orbiting-gray" />
        <div className="h-12 w-12 rounded-full bg-white animate-orbiting-white" />
      </div>
    </div>
  );
};

export default Loading;
