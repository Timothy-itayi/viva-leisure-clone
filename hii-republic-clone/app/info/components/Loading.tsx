// components/Loading.tsx

import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <p className="text-xl"></p>
      {/* You can add a spinner or any other loading animation here */}
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
