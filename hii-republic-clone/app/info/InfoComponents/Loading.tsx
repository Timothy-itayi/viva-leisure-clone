import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full pt-20">
      <span className="relative font-bold text-3xl text-white mb-10">Loading</span>
      <div className="relative flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-gray-300 animate-pushup-down" />
        <div className="h-12 w-12 rounded-full bg-white animate-pushup-up" />
      </div>
    </div>
  );
};

export default Loading;
