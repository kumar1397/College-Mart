import React, { useState } from 'react';
import { FaCalendarAlt, FaTag, FaInfoCircle } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { name, price, description, date, imgUrl, tag } = product;
  const [showDetails, setShowDetails] = useState(false);

  // Format date
  const formattedDate = new Date(date).toLocaleDateString();

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="border cursor-pointer border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl overflow-hidden">
      {imgUrl && imgUrl.length > 0 && (
        <img
          src={imgUrl[0].url}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg "
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center space-x-2">
          <FaInfoCircle className="text-[#925FE2] text-xl" />
          <span>{name}</span>
        </h2>
        <p className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
          <FaTag className="text-[#925FE2] text-xl" />
          <span>${price}</span>
        </p>
        {showDetails && (
          <div className="mb-4">
            <p className="text-gray-700 text-sm mb-2">{description}</p>
            <p className="text-gray-600 text-sm mb-2 flex items-center space-x-2">
              <FaCalendarAlt className="text-[#925FE2] text-md" />
              <span>Date: <span className="font-medium">{formattedDate}</span></span>
            </p>
            <p className="text-gray-600 text-sm flex items-center space-x-2">
              <FaTag className="text-[#925FE2] text-md" />
              <span>Category: <span className="font-medium">{tag}</span></span>
            </p>
          </div>
        )}
        <button
          onClick={handleShowDetails}
          className="bg-[#925FE2] text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none transition-shadow duration-300 ease-in-out hover:shadow-lg text-sm font-medium"
        >
          {showDetails ? 'Show Less' : 'View More '}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
