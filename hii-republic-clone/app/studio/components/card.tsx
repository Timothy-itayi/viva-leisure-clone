"use client"; // Ensure this component is treated as a client component

import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  address: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, address, imageSrc }) => {
  // Function to handle click event
  const handleMoreInfoClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault(); // Prevent the default link behavior
    console.log('Location Name:', title);
    
    // Manually navigate to the link after logging
    window.location.href = `/info?name=${encodeURIComponent(title)}`;
  };

  return (
    <div className="flex flex-col justify-between items-center h-full p-6 bg-black text-center rounded-lg border border-gray-600">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-4">
          <div>
            <Image
              src={imageSrc}
              alt="hit logo"
              width={30}
              height={30}
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold p-1 text-white ml-2">
            {title}
          </h2>
        </div>
        <p className="mb-4 whitespace-pre-line">{address}</p>
      </div>
      {/* More Info Button */}
      <p 
        className="border rounded-lg border-[#ff6c3a] text-white font-bold px-4 py-2 mt-auto hover:bg-[#ff6c3a] hover:text-white transition-colors"
        onClick={handleMoreInfoClick}
      >
        More Info
      </p>
    </div>
  );
};

export default Card;
