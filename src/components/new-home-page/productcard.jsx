import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="border p-4 shadow-md  rounded-lg hover:shadow-lg hover:scale-105  hover:sticky  " onClick={handleClick}>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.price}</p>
      
      {showDetails && (
        <div className="mt-4 cursor-pointer ">
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Buy Date:</strong> {product.buyDate}</p>
          <p><strong>Condition:</strong> {product.condition}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
