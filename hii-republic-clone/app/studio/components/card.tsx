import React from 'react';

interface CardProps {
  title: string; // Type annotation for title
  address: string; // Type annotation for address
}

const Card: React.FC<CardProps> = ({ title, address }) => {
  return (
    <div className="flex flex-col justify-between  items-center h-full p-6 bg-black text-center  rounded-lg border border-gray-600">
      <div>
        <h2 className="text-2xl font-bold mb-2 p-1">
          <span className="bg-white text-black px-1 mr-2">HR</span>
          {title}
        </h2>
        <p className="mb-4 whitespace-pre-line">{address}</p>
      </div>
      <button className="border rounded-lg border-[#ff6c3a] text-white font-bold px-4 py-2 mt-auto hover:bg-[#ff6c3a] hover:text-white transition-colors">
        MORE INFO
      </button>
    </div>
  );
};

export default Card;
