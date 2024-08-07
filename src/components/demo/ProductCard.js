import React, { useState } from 'react';
import { FaCalendarAlt, FaTag, FaInfoCircle, FaHeart, FaRegHeart, FaUser } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { name, price, description, date, imgUrl, tag, seller } = product;
  const [showDetails, setShowDetails] = useState(false);
  const [showSellerDetails, setShowSellerDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Format date
  const formattedDate = new Date(date).toLocaleDateString();

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleShowSellerDetails = () => {
    setShowSellerDetails(!showSellerDetails);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="relative border cursor-pointer border-gray-200 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden">
      {/* Favorite Icon */}
      <button
        onClick={handleFavoriteClick}
        className="absolute top-4 right-4 text-[#925FE2] transition-transform duration-300 ease-in-out hover:scale-110"
      >
        {isFavorite ? <FaHeart className="text-xl text-red-600" /> : <FaRegHeart className="text-xl text-red-600" />}
      </button>

      {/* Image */}
      {imgUrl && imgUrl.length > 0 && (
        <img
          src={imgUrl[0].url}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}

      <div className="p-4 bg-white">
        {/* Product Name and Price */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center space-x-2">
          <FaInfoCircle className="text-[#925FE2] text-lg" />
          <span>{name}</span>
        </h2>
        <p className="text-lg font-bold text-gray-700 mb-4 flex items-center space-x-2">
          <FaTag className="text-[#925FE2] text-lg" />
          <span>${price}</span>
        </p>

        {/* Details Toggle */}
        {showDetails && (
          <div className="mb-4">
            <p className="text-gray-700 text-sm mb-2">{description}</p>
            <p className="text-gray-600 text-sm mb-2 flex items-center space-x-2">
              <FaCalendarAlt className="text-[#925FE2] text-base" />
              <span>Date: <span className="font-medium">{formattedDate}</span></span>
            </p>
            <p className="text-gray-600 text-sm mb-2 flex items-center space-x-2">
              <FaTag className="text-[#925FE2] text-base" />
              <span>Category: <span className="font-medium">{tag}</span></span>
            </p>
            {showSellerDetails && (
              <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                <h3 className="text-md font-semibold text-gray-800 mb-2">Seller Details:</h3>
                <p className="text-gray-700 text-sm mb-2 flex items-center space-x-2">
                  <FaUser className="text-[#925FE2] text-base" />
                  <span>{seller.name}</span>
                </p>
                <p className="text-gray-600 text-sm">{seller.contactInfo}</p>
              </div>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col space-y-2">
          <button
            onClick={handleShowDetails}
            className="bg-[#925FE2] text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none transition-shadow duration-300 ease-in-out hover:shadow-lg text-xs font-medium"
          >
            {showDetails ? 'Show Less' : 'View More'}
          </button>
          {showDetails && (
            <button
              onClick={handleShowSellerDetails}
              className="bg-[#925FE2] text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none transition-shadow duration-300 ease-in-out hover:shadow-lg text-xs font-medium"
            >
              {showSellerDetails ? 'Hide Seller Details' : 'Show Seller Details'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
