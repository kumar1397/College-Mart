import React from 'react'
import Heronavbar from './Heronavbar'
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div>
      <Heronavbar />
      <div className='herohomebg w-stretch h-[50vh] flex justify-center text-white'>
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>The
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">College Mart <br />
            <span className="font-light">one stop solution</span></h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
        </div>
      </div>
      <div className='flex flex-col items-center bg-'>
        <div></div>
        <div className='flex flex-row gap-4'>
          <FaInstagram />
          <FaXTwitter />
          <FaGithub />
        </div>
        <div></div>
      </div>
    </div>
  )
}
export default Hero