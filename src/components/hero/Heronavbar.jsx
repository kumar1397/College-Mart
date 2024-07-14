import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Heronavbar = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  }; 

  return (
    <div className=' shadow-md fixed w-full'>
     

<nav className=" border-gray-200 dark:bg-gray-90 bg-blueGray-200 shadow-2xl z-50   ">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ">
        <a href="http.coms://flowbite" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="Group12.svg" className="h-12  w-16" alt="Flowbite Logo" />
            <span className="self-center my-auto text-2xl font-semibold whitespace-nowrap dark:text-white">College Mart</span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <Link to={"/auth"} href="#" className="text-md  text-blue-600 dark:text-blue-500 hover:underline">
            <button class="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-md text-center self-center px-4 py-2 m-2">Login</button>
            </Link>
        </div>
    </div>
</nav>
<nav className="bg-gray-300 shadow-lg dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center justify-end">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#about-us" className="text-gray-900 dark:text-white hover:underline">About us</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Contact us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}

export default Heronavbar;