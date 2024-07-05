import React from 'react'

const Heronavbar = () => {
  return (
    <div>
      <div className='w-full h-16 text-lg font-semibold flex flex-row justify-end items-center gap-10 pr-10 hnavbg text-[#f5f5f5]'>
        <div className={`w-20 h-8 transparent text-white hover:bg-[#f5f5f5] hover:text-[#8c52af] flex justify-center items-center rounded-2xl transition-all duration-300`}>
          <div >Home</div>
        </div>
        <div className={`w-24 h-8 transparent text-white hover:bg-[#f5f5f5] hover:text-[#8c52af] flex justify-center items-center rounded-2xl transition-all duration-300`}>
          <span>About us</span>
        </div>
        <div className={`w-20 h-8 transparent text-white hover:bg-[#f5f5f5] hover:text-[#8c52af] flex justify-center items-center rounded-2xl transition-all duration-300`}>
          <span>Contact</span>
        </div>
        <div className={`w-20 h-8 transparent text-white hover:bg-[#f5f5f5] hover:text-[#8c52af] flex justify-center items-center rounded-2xl transition-all duration-300`}>
          <span>Sign In</span>
        </div>
      </div>
    </div>
  )
}

export default Heronavbar;
