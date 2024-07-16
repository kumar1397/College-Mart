
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-48 w-48 border-t-4 border-b-4 border-purple-500"></div>
      <img 
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" 
        alt="Thinking Avatar" 
        className="rounded-full h-40 w-40" 
      />
    </div>
  </div>
  );
};

export default Spinner;
