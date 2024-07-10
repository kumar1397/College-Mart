import React from 'react';
import Header from './header';
import Footer from './footer';
import ProductCard from './productcard';
import ProductList from './productlist';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import HorizontalCarousel from './HorizontalCarousel';
import BackgroundImagePage from './intropage';

const images = [
  "Frame9.svg",
  "Frame10.svg",
  "Frame11.svg",
  "Frame12.svg",
  "Frame13.svg",
  "Frame14.svg",
  "Frame8.svg"
];

function Home02() {
  return (
    <div className="min-h-screen flex flex-col relative mb-5 ">
      <Navbar />
      <div className="py-2  ">
      <HorizontalCarousel images={images} />
    </div>
    <div className='p-4'>
    <BackgroundImagePage />
    </div>
      <main className="flex-grow mt-4 ">
        <ProductList />
      </main>
      <Link to="/home/form" className='top-[75%] z-50 fixed right-16 h-16 w-16 bg-[#925FE2] shadow-xl hover:bg-[#7a4fc2] rounded-full items-center cursor-pointer flex justify-center transition-transform transform hover:scale-90 hover:rotate-45'>
        <img src="plus-svgrepo-com.svg" className=' w-8 h-8 object-fill transition-transform duration-300 ease-in-out invert' alt="plus" />
        </Link>
      <Footer />
    </div>
  );
}

export default Home02;
