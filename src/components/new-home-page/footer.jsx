import React, { useState } from 'react';
import Footer02 from './footer_cont';

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <footer
      className={`bg-black text-white fixed w-full bottom-0 z-20 transition-all duration-500 ${expanded ? ' h-44' : 'h-8'}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={`container mx-auto text-center transition-opacity duration-500 ${expanded ? 'opacity-100' : 'opacity-0'}`}>
      <Footer02/>
      </div>
    </footer>
  );
};

export default Footer;

