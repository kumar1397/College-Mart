import React, { useState } from 'react';
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

  const [offer, setOffer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your offer of $${offer} has been submitted.`);
    setOffer('');
  };

  const handleOfferChange = (event) => {
    setOffer(event.target.value);
  };

  const images = [
    "ycle.webp",
    "ycle.webp"
  ];

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg flex flex-col md:flex-row w-full h-full">
      <div className='w-full md:w-1/2 h-full flex flex-col gap-4'>
        <div className='w-full h-60 mb-4'>
          <Slider {...settings} className="h-full">
            {images.map((image, index) => (
              <div key={index} className='h-full flex justify-center items-center'>
                <div className='bg-gray-200 w-full h-full'>
                  <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='w-full flex justify-evenly'>
          {images.map((image, index) => (
            <div key={index} className='w-1/3 mx-1'>
              <img src={image} alt={`Thumbnail ${index}`} className="w-full h-20 object-cover rounded-md border-2 border-gray-200" />
            </div>
          ))}
        </div>
      </div>
      <div className='w-full md:w-1/2 p-4 flex flex-col justify-start border-t md:border-t-0 md:border-l border-gray-200'>
        <div className='mb-2 mx-4'>
          <h2 className='text-2xl font-bold mb-2'>{product.name}</h2>
          <p className='flex items-center mb-2 text-gray-700'><FaTag className='mr-2' /> Tag: {product.tag}</p>
          <p className='flex items-center mb-2 text-gray-700'><FaCalendarAlt className='mr-2' /> Buy Date: {product.buyDate}</p>
          <p className='flex items-center mb-2 text-gray-700'>Condition: {product.condition}</p>
          <p className='text-gray-700'>{product.description}</p>
        </div>
        <div className='mx-4'>
          <h3 className='text-lg font-semibold mb-2 mt-3'>User Information</h3>
          <p className='flex items-center mb-2 text-gray-700'><FaUser className='mr-2' /> Name: {product.userName}</p>
          <p className='flex items-center mb-2 text-gray-700'><FaPhoneAlt className='mr-2' /> Phone: {product.phone}</p>
          <p className='flex items-center mb-2 text-gray-700'><FaEnvelope className='mr-2' /> Email: {product.email}</p>
          <p className='flex items-center text-gray-700'><FaRegBuilding className='mr-2' /> Hall Name: {product.hallName}</p>
        </div>
        <div className='mx-4'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col md:flex-row items-center space-x-0 md:space-x-2 w-full mx-auto my-6'>
              <label className='text-sm font-semibold text-red-400 items-center'>Negotiate the Price</label>
              <input
                type='number'
                className='border border-gray-300 rounded-lg px-4 py-1 w-full md:w-1/2 text-sm'
                placeholder='Enter your offer'
                value={offer}
                onChange={handleOfferChange}
              />
              <button
                type='submit'
                className='bg-[#925FE2] hover:bg-green-400 text-white rounded-lg px-4 py-1 text-sm font-semibold mt-2 md:mt-0'
              >
                Submit Offer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
