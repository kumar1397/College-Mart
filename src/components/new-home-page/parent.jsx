import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer';
import ProductCard from './productcard';
// import ProductList from './productlist';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import HorizontalCarousel from './HorizontalCarousel';
import BackgroundImagePage from './intropage';
import Spinner from '../spinner/Spinner';
import ProductList from '../demo/HomePage';

const images = [
  "Frame9.svg",
  "Frame10.svg",
  "Frame11.svg",
  "Frame12.svg",
  "Frame13.svg",
  "Frame14.svg",
  "Frame8.svg"
];

const Home02 = () => {
  const [loading, setLoading] = useState(false); //spinner loading

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideDownVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInFromLeftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const fadeInScaleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const staggerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: 45,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="min-h-screen flex flex-col relative mb-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideDownVariants}
          >
            <Navbar />
          </motion.div>
          <motion.div
            className="py-2"
            initial="hidden"
            animate="visible"
            variants={slideInFromLeftVariants}
          >
            <HorizontalCarousel images={images} />
          </motion.div>
          <motion.div
            className='p-4'
            initial="hidden"
            animate="visible"
            variants={fadeInScaleVariants}
            transition={{ delay: 0.3 }}
          >
            <BackgroundImagePage />
          </motion.div>
          <motion.main
            className="flex-grow mt-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            transition={{ delay: 0.6 }}
          >
            <ProductList />
          </motion.main>
          <motion.div
            className='top-[75%] z-50 fixed right-16 h-16 w-16 bg-[#925FE2] shadow-xl rounded-full items-center cursor-pointer flex justify-center transition-transform'
            variants={buttonVariants}
            whileHover="hover"
          >
            <Link to="/home/form">
              <img
                src="plus-svgrepo-com.svg"
                className='w-8 h-8 object-fill transition-transform duration-300 ease-in-out invert'
                alt="plus"
              />
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideDownVariants}
          >
            <Footer />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Home02;
