import React from 'react';
import Slider from 'react-slick';
import { FaTag, FaCalendarAlt, FaUser, FaPhoneAlt, FaEnvelope, FaRegBuilding } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductComponent = ({ products }) => {
  

  return (
    <div className="w-full mx-auto p-4 h-screen">
      {products.map((product) => (
        <div key={product.id} className="bg-white cursor-pointer p-4 flex justify-between  flex-row rounded-lg shadow-md mb-6">
          <div className="w-[30%] p-4">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="flex items-center mb-2 text-gray-700"><FaTag className="mr-2" /> Tag: {product.tag}</p>
            <p className="flex items-center mb-2 text-gray-700"><FaCalendarAlt className="mr-2" /> Buy Date: {product.buyDate}</p>
            <p className="flex items-center mb-2 text-gray-700">Condition: {product.condition}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
          </div>
          <div className="w-[60%] flex flex-row justify-centre ">
              {product.images.map((image, index) => (
                <div key={index} className="h-full w-fit ">
                  {/* <img src={image} alt={Slide ${index}} className="w-1/2 h-full object-cover" /> */}
                </div>
              ))}
         
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;