import React, { useState } from 'react';
import CardComponent from './moreproductdetails';

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  const handleShowProductClick = () => {
    setShowProduct(true);
  };

  const handleCloseProductClick = () => {
    setShowProduct(false);
  };

  return (
    <div>
      {/* Product Card */}
      <div className={`border p-4 shadow-md rounded-lg hover:shadow-lg hover:scale-105 hover:sticky`} onClick={handleCardClick}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <h2 className="text-xl font-bold mt-2">{product.name}</h2>
        <p className="text-gray-600">{product.price}</p>
        {showDetails && (
          <div className="mt-4 cursor-pointer">
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Buy Date:</strong> {product.buyDate}</p>
            <p><strong>Condition:</strong> {product.condition}</p>
          </div>
        )}
        <button
          onClick={handleShowProductClick}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Show More Product Details
        </button>
      </div>

   {/* //   Detailed Product Card  */}
      {showProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
          <div className="relative">
            <button
              onClick={handleCloseProductClick}
              className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded"
            >
              Close
            </button>
            <CardComponent product={product} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
