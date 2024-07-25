import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heronavbar from './Heronavbar';
import { Link } from 'react-router-dom';
import Footer from './footer';
import AutoPlay from './Carousel';
import Spinner from '../spinner/Spinner';

const Hero = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    setLoading(true);
    setTimeout(() => setLoading(false), 400);

    return () => {
      // Cleanup if needed
    };
  }, []);

  useEffect(() => {
    const container = document.getElementById('about-us');
    const onMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;
      container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    container.addEventListener('mousemove', onMouseMove);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.2 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.4 },
    },
  };

  return (
    <div className='w-full h-full'>
      <style>
        {`
          #about-us {
            transition: transform 0.1s;
            perspective: 1000px;
          }
        `}
      </style>
      {loading ? (
        <Spinner />
      ) : (
        <div className='overflow-x-hidden scroll-auto from-gray-900 via-gray-800 to-gray-900'>
          <Heronavbar />
          <motion.div
            className='herohomebg w-full h-[50vh] flex justify-center items-center text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mt-20'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col justify-center items-center text-center">
              <div className="font-semibold flex items-center uppercase ">
                <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>The
              </div>
              <h1 className="uppercase text-[35px] md:text-[55px] lg:text-[70px] leading-[1.1] font-semibold mb-4">College Mart<br />
                <span className="font-light">One Stop Solution</span></h1>
              <Link to={'/'} className='uppercase font-semibold border-b-2 border-cyan-500 mt-4'>Discover More</Link>
            </div>
          </motion.div>
          <motion.div
            id="about-us"
            className='text-white w-full flex flex-col items-center'
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <section className="about-us w-full bg-gradient-to-r from-gray-800 to-gray-900 py-12">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white">Welcome to College Mart</h2>
                  <p className="text-lg text-gray-300 mt-4">
                    Your Campus Marketplace for Buying and Selling
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center">
                  <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                    <motion.div
                      className="bg-gray-800 p-8 rounded-lg shadow-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <h3 className="text-3xl font-semibold text-white mb-4">Our Mission</h3>
                      <p className="text-lg text-gray-300 mb-4">
                        College Mart is designed to make college life easier by providing a platform where students can buy and sell a wide range of products. Whether you need textbooks, dorm essentials, or unique student-made items, our marketplace is here to meet your needs.
                      </p>
                      <p className="text-lg text-gray-300 mb-4">
                        For sellers, College Mart offers a unique opportunity to reach fellow students and monetize items you no longer need or products you create. For buyers, it's a one-stop-shop to find great deals on everything from study materials to custom college gear.
                      </p>
                      <p className="text-lg text-gray-300">
                        Join us in fostering a vibrant college community where buying and selling are made simple and engaging. Connect with your peers, discover great deals, and support fellow students with College Mart.
                      </p>
                    </motion.div>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <motion.div
                      className="bg-gray-800 p-8 rounded-lg shadow-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <h4 className="text-2xl font-semibold text-white mb-4">How It Works</h4>
                      <div className="flex flex-col lg:flex-row lg:space-x-8">
                        <div className="mb-6 lg:mb-0 lg:w-1/2">
                          <h5 className="text-xl font-semibold text-white mb-2">For Buyers</h5>
                          <ul className="list-disc list-inside text-lg text-gray-300">
                            <li className="mb-2">Browse a variety of products from your peers.</li>
                            <li className="mb-2">Filter and search for specific items easily.</li>
                            <li className="mb-2">Make secure purchases through our platform.</li>
                            <li className="mb-2">Enjoy great deals and support fellow students.</li>
                          </ul>
                        </div>
                        <div className="lg:w-1/2">
                          <h5 className="text-xl font-semibold text-white mb-2">For Sellers</h5>
                          <ul className="list-disc list-inside text-lg text-gray-300">
                            <li className="mb-2">List your products with easy-to-use tools.</li>
                            <li className="mb-2">Set your own prices and manage your listings.</li>
                            <li className="mb-2">Reach a targeted audience of college students.</li>
                            <li className="mb-2">Track sales and communicate with buyers through the platform.</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-gray-300 mt-4 text-center">
                        Ready to dive in? <a href="/auth" className="text-cyan-500 underline">Sign up today</a> and start exploring College Mart!
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
            <div className='w-full'>
              <AutoPlay />
            </div>
          </motion.div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Hero;
