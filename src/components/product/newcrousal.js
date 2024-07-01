import React, { useEffect, useRef } from 'react';


const InfiniteScrollContainer = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollDiv = scrollRef.current;
    const scroll = () => {
      if (scrollDiv.scrollTop >= scrollDiv.scrollHeight - scrollDiv.clientHeight) {
        scrollDiv.scrollTop = 0;
      } else {
        scrollDiv.scrollTop += 1;
      }
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-full'>
    <div
      ref={scrollRef}
      className="h-72 w-full overflow-hidden border border-black relative"
    >
      <div className="h-96 p-2">
        <div className="h-1/2 border-b border-gray-400">
          <h2 className="text-xl font-bold">Upper Part</h2>
          <p>This is the upper part of the container.</p>
        </div>
        <div className="h-1/2">
          <h2 className="text-xl font-bold">Instructions</h2>
          <p>This is the lower part containing instructions.</p>
          <p>1. Instruction one.</p>
          <p>2. Instruction two.</p>
          <p>3. Instruction three.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InfiniteScrollContainer;
