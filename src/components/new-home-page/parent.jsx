import React from 'react';
import Header from './header';
import Footer from './footer';
import ProductCard from './productcard';
import ProductList from './productlist';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

function Home02() {
  return (
    <div className="min-h-screen flex flex-col relative ">
     <Navbar/>
      <main className="flex-grow mt-28 ">
       

        {/* <div className="flex flex-col justify-center bg-[#925FE2]">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>The
          </div>
          <h1 className="uppercase text-[55px] md:text-[30px] leading-[1.1] font-semibold mb-4">College Mart <br />
            <span className="font-light">one stop solution</span></h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
        </div> */}


         
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default Home02;
