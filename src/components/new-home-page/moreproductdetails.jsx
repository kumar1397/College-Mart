import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
      <div className=' w-full h-[30%] flex justify-evenly flex-row p-2  shadow-lg'>
        {images.map((image,index)=>(
           <div className='bg-red-500 w-1/3 mx-2'>
             <img src={image} alt={`Slide ${index}`} className="w-full h-full object-fill"/>
           </div>
        ))}
         
      </div>
    </div>
    <div className='bg-red-300 w-1/2'>02</div>
  </div>
);
};

export default CardComponent;
