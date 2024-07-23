import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import the CSS file

const Heronavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;

      if (scrollPercentage > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`fixed w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md z-50 navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
      <nav className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-3">
          <a href="https://flowbite.com" className="flex items-center space-x-3">
            <img src="Group12.svg" className="h-12 w-16" alt="Flowbite Logo" />
            <span className="text-2xl font-semibold text-white">College Mart</span>
          </a>
        </div>
        <ul className="flex space-x-12 text-lg font-medium">
          <li>
            <a href="#" className="text-white hover:text-cyan-500">Home</a>
          </li>
          <li>
            <a href="#about-us" className="text-white hover:text-cyan-500">About Us</a>
          </li>
          <li>
            <a href="#contact-us" className="text-white hover:text-cyan-500">Contact Us</a>
          </li>
        </ul>
        <div className="flex items-center">
          <Link to="/auth">
            <button className="bg-cyan-500 rounded-full text-white text-md px-4 py-2 hover:bg-cyan-600 transition duration-300">
              Login/Sign-Up
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Heronavbar;