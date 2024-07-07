import React from 'react'
import Heronavbar from './Heronavbar'
import { FaInstagram , FaGooglePlusG } from "react-icons/fa6";
import { FaTwitter , FaGithub , FaLinkedinIn , FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';


import AutoPlay from './Carousel';
const Hero = () => {
  return (
    <div className='overflow-x-hidden scroll-auto' >
      <Heronavbar />
      <div className='herohomebg w-stretch h-[50vh] flex justify-center text-white mt-16'>
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>The
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">College Mart <br />
            <span className="font-light">one stop solution</span></h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
        </div>
      </div>
      <div className='bg-[#D9D9D9] w-full h-[50vh] flex flex-col pt-7'>
        <div className='flex justify-center text-[40px] font-bold exo'>About Us</div>
        <span className='text-xl font-medium px-7 pt-4' style={{ fontFamily: 'Roboto, sans-serif' }}>
      Welcome to College Mart, your go-to open marketplace exclusively for college students! Here at College Mart, we understand the unique needs and budgets of students. Our platform is designed to make buying and selling items easier, safer, and more affordable. Whether you’re looking to offload textbooks from last semester, find stylish dorm decor, or snag a great deal on a used laptop, College Mart is here to help. Join our community today and experience the convenience of student-to-student commerce.
    </span>

      </div>
      <AutoPlay/>
      <div className='flex flex-row items-center h-[15vh] w-full justify-around bg-black'>
        <div className='w-1/2 flex flex-col justify-center items-center text-[#f5f5f5] '>
          <span className='text-3xl font-bold playwrite'>College Mart</span>
        </div>
        <div className='flex flex-row gap-8 justify-center w-1/2 '>
          <FaFacebookF size={30} color={'white'}/>
          <FaTwitter size={30} color={'white'}/>
          <FaGooglePlusG size={30} color={'white'}/>
          <FaInstagram size={30} color={'white'} />
          <FaLinkedinIn size={30} color={'white'}/>
          <FaGithub size={30} color={'white'} />
        </div>
        <div></div>
      </div>

    </div>
  )
}
export default Hero