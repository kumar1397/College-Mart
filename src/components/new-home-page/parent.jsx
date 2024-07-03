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
      <main className="flex-grow mt-14 ">    
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default Home02;
