import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  address: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, address, imageSrc }) => {
  return (
    <div className="flex flex-col justify-between items-center h-full p-6 bg-black text-center rounded-lg border border-gray-600">
      <div className="flex flex-col items-center">
        {/* Flex container for Image and Title */}
        <div className="flex items-center mb-4">
          {/* Image */}
          <div>
            <Image
              src={imageSrc}
              alt="hit logo"
              width={30}
              height={30}
              className="object-cover" // Removed absolute positioning
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold p-1 text-white ml-2">
            {title}
          </h2>
        </div>

        {/* Address */}
        <p className="mb-4 whitespace-pre-line">
          {address}
        </p>
      </div>
      <button className="border rounded-lg border-[#ff6c3a] text-white font-bold px-4 py-2 mt-auto hover:bg-[#ff6c3a] hover:text-white transition-colors">
        MORE INFO
      </button>
    </div>
  );
};

export default Card;
