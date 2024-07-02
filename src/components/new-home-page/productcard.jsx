import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
