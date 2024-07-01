import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VerticalCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, 
    verticalSwiping: true, 
  };

  return (
    <div className="w-[80%] h-full bg-gray-500">
      <Slider {...settings} className="h-full">
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 4" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 5" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 6" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 7" />
        </div>
        <div className="w-full h-[400px] lg:h-auto lg:w-1/2 p-4 bg-gray-800 text-white flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">Product Selling Rules</h2>
          <ul className="list-disc pl-5">
            <li>Products must be in good condition.</li>
            <li>Provide accurate product details.</li>
            <li>Upload clear and high-quality product images.</li>
            <li>Set a reasonable price for your product.</li>
            <li>Ensure timely delivery after purchase.</li>
          </ul>
        </div>
      </Slider>
    </div>
  );
};

export default VerticalCarousel;
