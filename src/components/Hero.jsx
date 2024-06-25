import React from 'react'
import Heronavbar from './Heronavbar'
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <Heronavbar />
      <div className='herohomebg w-stretch h-[50vh]'>
        content
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