import React from 'react';
import Header from './header';
import Footer from './footer';
import ProductCard from './productcard';
import ProductList from './productlist';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import HorizontalCarousel from './HorizontalCarousel';

const images = [
  'https://images.pexels.com/photos/824197/pexels-photo-824197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1720154347~exp=1720157947~hmac=b44ae45cf7ecb34cd7ef5ba71de4983a791251f9301aeb9f2ef11887f9c046e4&w=1060',
  'https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?t=st=1720155046~exp=1720158646~hmac=e7906ba438857333272435201efbd700fdf3f62314582cabe61bf8830455d9a2&w=1060',
];

function Home02() {
  return (
    <div className="min-h-screen flex flex-col relative ">
      <Navbar />
      <div className="py-2  ">
      <HorizontalCarousel images={images} />
    </div>
      <main className="flex-grow mt-4 ">
        <ProductList />
      </main>
      <Link to="/home/form" className='top-[75%] fixed right-16 h-16 w-16 bg-[#925FE2] shadow-xl hover:bg-[#7a4fc2] rounded-full items-center cursor-pointer flex justify-center transition-transform transform hover:scale-90 hover:rotate-45'>
        <img src="plus-svgrepo-com.svg" className=' w-8 h-8 object-fill transition-transform duration-300 ease-in-out invert' alt="plus" />
        </Link>
      <Footer />
    </div>
  );
}

export default Home02;
