import React, { useState } from 'react';
import CardComponent from './moreproductdetails';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const ProductCard = ({ product, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  const handleShowProductClick = (e) => {
    e.stopPropagation(); // Prevent triggering handleCardClick
    setShowProduct(true);
  };

  const handleCloseProductClick = () => {
    setShowProduct(false);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  // Determine the tilt direction based on the index
  const tiltClass = index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1';

  return (
    <div className="relative">
      {/* Product Card */}
      <div
        className={`border p-4 shadow-lg rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${tiltClass} bg-gradient-to-r from-white to-gray-100`}
        onClick={handleCardClick}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-105"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          />
          <button
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 text-[#925FE2] transition-colors duration-200 hover:text-purple-700"
          >
            {isFavorite ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
          </button>
        </div>
        <h2 className="text-xl font-bold mt-2 text-gray-800">{product.name}</h2>
        <p className="text-gray-600">{product.price}</p>
        {showDetails && (
          <div className="mt-4 text-gray-700">
            <p className="mb-1">
              <strong>Description:</strong> {product.description}
            </p>
            <p className="mb-1">
              <strong>Buy Date:</strong> {product.buyDate}
            </p>
            <p className="mb-1">
              <strong>Condition:</strong> {product.condition}
            </p>
          </div>
        )}
        <button
          onClick={handleShowProductClick}
          className="mt-2 bg-[#925FE2] text-white px-4 py-2 text-sm rounded transition-colors duration-200 hover:bg-purple-700 focus:outline-none"
        >
          Show More Product Details
        </button>
      </div>

      {/* Detailed Product Card */}
      {showProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full h-auto overflow-y-auto">
            <button
              onClick={handleCloseProductClick}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 focus:outline-none"
            >
              &times;
            </button>
            <CardComponent product={product} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
