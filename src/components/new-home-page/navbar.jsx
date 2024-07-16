import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import AuthContext from "../../contexts/AuthContext";
import Logo from "./logo.svg";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: 1, text: "Home", path: "/home" },
    { id: 2, text: "Products", path: "/products" },
    { id: 3, text: "Add Products", path: "/add-products" },
    { id: 4, text: "Cart", path: "/cart" },
    { id: 5, text: "Contact Us", path: "/contactus" },
  ];

  const handleNav = () => setNav(!nav);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setIsVisible(scrollPercent <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-[#925FE2] shadow-lg flex justify-between z-20 items-center h-20 w-full px-6 text-white fixed transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex items-center space-x-2 transform hover:scale-110 transition-transform duration-300">
        <div className="w-24 max-w-24">
          <img src={Logo} alt="Logo" className="transform hover:rotate-3 transition-transform duration-300" />
        </div>
      </div>
      <ul className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black transform hover:translate-z-1 hover:scale-105 transition-transform"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={`fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ${
          nav ? "left-0" : "left-[-100%]"
        } md:hidden`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 transform hover:translate-z-1 hover:scale-105 transition-transform"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div className="relative flex items-center space-x-4">
        {user ? (
          <>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transform hover:translate-z-1 hover:scale-105 transition-transform"
              type="button"
            >
              <AiOutlineUser className="w-6 h-6 mr-2" />
              <span>{user.name}</span>
              <svg
                className="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="absolute top-full mt-2 z-10 bg-white divide-y divide-gray-100 w-44 rounded-lg shadow dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      to="/home/profile"
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left flex items-center transform hover:translate-z-1 hover:scale-105 transition-transform"
                    >
                      <AiOutlineUser className="mr-2" />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left flex items-center transform hover:translate-z-1 hover:scale-105 transition-transform"
                      onClick={logout}
                    >
                      <AiOutlineLogout className="mr-2" />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link
            to="/login"
            className="flex items-center px-5 py-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transform hover:translate-z-1 hover:scale-105 transition-transform"
          >
            <AiOutlineUser className="mr-2" />
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
