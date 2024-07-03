import React from 'react'

const Heronavbar = () => {
  return (
    <div>
      <div className='w-full h-16 text-lg font-semibold flex flex-row justify-end items-center gap-10 pr-10 hnavbg text-[#f5f5f5]'>
        <div>
          <span>Home</span>
          <div className={`w-14 h-1 bg-[#f5f5f5] hidden group-hover:block `}></div>
        </div>
        <div>
          <span>About us</span>
          <div className={`w-18 h-1 bg-[#f5f5f5] hidden`}></div>
        </div>
        <div>
          <span>Contact</span>
          <div className={`w-18 h-1 bg-[#f5f5f5] hidden`}></div>
        </div>
        <div>
          <span>Sign In</span>
          <div className={`w-18 h-1 bg-[#f5f5f5] hidden`}></div>
        </div>
      </div>
    </div>
  )
}

export default Heronavbar;
