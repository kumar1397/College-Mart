import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTag, FaCalendarAlt, FaRegBuilding, FaPhoneAlt, FaEnvelope, FaUser } from 'react-icons/fa';


const CardComponent = ({ product }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
   "ycle.webp",
   "ycle.webp"
  ];

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg w-full h-full flex flex-row justify-between">
    <div className='w-1/2 h-full flex justify-evenly flex-col gap-1  '>
      <div className='w-full h-[60%] my-5'>
      <Slider {...settings} className="h-fitp-3">
        {images.map((image, index) => (
          <div key={index} className='h-full flex justify-center items-center w-1/2'>
            <div className='bg-green-700 max-w-full max-h-full'>
              <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover"/>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <div className=' w-full h-[20%] flex justify-evenly flex-row p-2'>
        {images.map((image,index)=>(
           <div className='bg-red-500 w-1/3 mx-2'>
             <img src={image} alt={`Slide ${index}`} className="w-full h-full object-fill"/>
           </div>
        ))}
         
      </div>
    </div>
    <div className='w-1/2 p-4 flex flex-col justify-between  border-l border-gray-200 mx-auto '>
        {/* Product Information */}
        <div className='mb-6 mx-6'>
          <h2 className='text-2xl font-bold mb-4'>{product.name}</h2>
          <p className='flex items-center mb-2 text-gray-700'><FaTag className='mr-2' /> Tag: {product.tag}</p>
          <p className='flex items-center mb-2 text-gray-700'><FaCalendarAlt className='mr-2' /> Buy Date: {product.buyDate}</p>
          <p className='flex items-center mb-2 text-gray-700'>Condition: {product.condition}</p>
          <p className='text-gray-700'>{product.description}</p>
        </div>

        {/* User Information */}
        <div className='mx-6'>
          <h3 className='text-lg font-semibold mb-4'>User Information</h3>
          <p className='flex items-center mb-2 text-gray-700'><FaUser className='mr-2' /> Name: {product.userName}</p>
          <p className='flex items-center mb-2 text-gray-700'><FaPhoneAlt className='mr-2' /> Phone: {product.phone}</p>
          <p className='flex items-center mb-2 text-gray-700'><FaEnvelope className='mr-2' /> Email: {product.email}</p>
          <p className='flex items-center text-gray-700'><FaRegBuilding className='mr-2' /> Hall Name: {product.hallName}</p>
        </div>
      </div>
    </div>

);
};

export default CardComponent;
