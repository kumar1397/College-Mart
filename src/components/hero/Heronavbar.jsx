import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Heronavbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-3">
          <a href="https://flowbite.com" className="flex items-center space-x-3">
            <img src="Group12.svg" className="h-12 w-16" alt="Flowbite Logo" />
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">College Mart</span>
          </a>
        </div>
        <ul className="flex space-x-12 text-lg font-medium">
          <li>
            <a href="#" className="text-gray-700 dark:text-white hover:text-indigo-500">Home</a>
          </li>
          <li>
            <a href="#about-us" className="text-gray-700 dark:text-white hover:text-indigo-500">About Us</a>
          </li>
          <li>
            <a href="#contact-us" className="text-gray-700 dark:text-white hover:text-indigo-500">Contact Us</a>
          </li>
        </ul>
        <div className="flex items-center">
          <Link to="/auth">
            <button className="bg-indigo-500 rounded-full text-white text-md px-4 py-2 hover:bg-indigo-600 transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Heronavbar;
