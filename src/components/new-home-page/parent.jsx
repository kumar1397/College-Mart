import React from 'react';
import Header from './header';
import Footer from './footer';
import ProductCard from './productcard';
import ProductList from './productlist';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
// import "/plus-svgrepo-com.svg"


function Home02() {
  return (
    <div className="min-h-screen flex flex-col relative ">
      <Navbar />
      <main className="flex-grow mt-9 ">
        <ProductList />
      </main>
      <div className='top-2/3 fixed right-3 h-16 w-16 bg-[#925FE2] shadow-xl hover:bg-[#7a4fc2] rounded-full items-center cursor-pointer flex justify-center transition-transform transform hover:scale-90 hover:rotate-45'>
        <img src="plus-svgrepo-com.svg" className='w-9 h-9 object-fill transition-transform duration-300 ease-in-out' alt="plus" />
      </div>


      <Footer />
    </div>
  );
}

export default Home02;
