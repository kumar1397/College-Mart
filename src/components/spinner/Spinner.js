
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-48 w-48 border-t-4 border-b-4 border-white"></div>
        <img 
         src="Group12.svg"
          alt="Thinking Avatar" 
          className="rounded-full h-40 w-40" 
        />
      </div>
    </div>
  );
};

export default Spinner;
