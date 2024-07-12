import React from 'react';
import Heronavbar from './Heronavbar';
import { Link } from 'react-router-dom';
import Footer from './footer';
import AutoPlay from './Carousel';

const Hero = () => {
  return (
    <div className='overflow-x-hidden scroll-auto '>
      <Heronavbar />
      <div className='herohomebg w-full h-[50vh] flex justify-center items-center text-white bg-blue-gray-400 mt-28'>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>The
          </div>
          <h1 className="uppercase text-[35px] md:text-[55px] lg:text-[70px] leading-[1.1] font-semibold mb-4">College Mart<br />
            <span className="font-light">one stop solution</span></h1>
          <Link to={'/'} className='uppercase font-semibold border-b-2 border-primary mt-4'>Discover More</Link>
        </div>
      </div>
      <div className='text-white w-full flex flex-col items-center'>
      <section className="about-us bg-gradient-to-r from-gray-100 to-gray-300 py-12">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800">Welcome to College Mart</h2>
      <p className="text-lg text-gray-600 mt-4">
        Your Campus Marketplace for Buying and Selling
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center">
      <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 mb-4">
            College Mart is designed to make college life easier by providing a platform where students can buy and sell a wide range of products. Whether you need textbooks, dorm essentials, or unique student-made items, our marketplace is here to meet your needs.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            For sellers, College Mart offers a unique opportunity to reach fellow students and monetize items you no longer need or products you create. For buyers, it's a one-stop-shop to find great deals on everything from study materials to custom college gear.
          </p>
          <p className="text-lg text-gray-600">
            Join us in fostering a vibrant college community where buying and selling are made simple and engaging. Connect with your peers, discover great deals, and support fellow students with College Mart.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h4>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <h5 className="text-xl font-semibold text-gray-800 mb-2">For Buyers</h5>
              <ul className="list-disc list-inside text-lg text-gray-600">
                <li className="mb-2">Browse a variety of products from your peers.</li>
                <li className="mb-2">Filter and search for specific items easily.</li>
                <li className="mb-2">Make secure purchases through our platform.</li>
                <li className="mb-2">Enjoy great deals and support fellow students.</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <h5 className="text-xl font-semibold text-gray-800 mb-2">For Sellers</h5>
              <ul className="list-disc list-inside text-lg text-gray-600">
                <li className="mb-2">List your products with easy-to-use tools.</li>
                <li className="mb-2">Set your own prices and manage your listings.</li>
                <li className="mb-2">Reach a targeted audience of college students.</li>
                <li className="mb-2">Track sales and communicate with buyers through the platform.</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-center">
            Ready to dive in? <a href="/signup" className="text-blue-500 underline">Sign up today</a> and start exploring College Mart!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        <div className=' -z-10 w-full'>
        <AutoPlay />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
