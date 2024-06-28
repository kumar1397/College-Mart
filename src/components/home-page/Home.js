import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
     <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home/profile">Dashboard</Link>
          </li>
          <li>
            <Link to="/home/form">Profile</Link>
          </li>
         
        </ul>
      </nav>
    <div>
    </div>
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex justify-around h-full">
       
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>The
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">College Mart <br />
          <span className="font-light">one stop solution</span></h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
        </div>
      </div>
    </section>


    </>
  );
};

export default Home;
