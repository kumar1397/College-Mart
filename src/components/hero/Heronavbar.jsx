import React from 'react'

import { useNavigate } from 'react-router-dom';

const Heronavbar = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  }; 

  return (
    <div>
      <div className='w-full h-16 text-lg fixed font-semibold flex flex-row justify-end items-center gap-10 pr-10 hnavbg text-[#f5f5f5]'>
        <div className={`w-20 h-8 transparent text-white hover:bg-[#f5f5f5] hover:text-[#8c52af] flex justify-center items-center rounded-2xl transition-all duration-300`}>
          <button  onClick={() => handleNavigation('/')}>Home</button>
        </div>
        <div className={`w-24 h-8 transparent text-white hover:bg-[#f5f5f5] hover:text-[#8c52af] flex justify-center items-center rounded-2xl transition-all duration-300`}>
          <button  onClick={() => handleNavigation('/about-us')}>About us</button>
        </div>
        <div className={`w-20 h-8 transparent text-white hover:bg-[#f5f5f5] hover:text-[#8c52af] flex justify-center items-center rounded-2xl transition-all duration-300`}>
          <button  onClick={() => handleNavigation('/contactus')}>Contact</button>
        </div>
        <div className={`w-20 h-8 transparent text-white hover:bg-[#f5f5f5] hover:text-[#8c52af] flex justify-center items-center rounded-2xl transition-all duration-300`}>
          <button  onClick={() => handleNavigation('/auth')} >Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Heronavbar;
