import React from 'react';

const ProductCard = ({ product }) => {
  const { name, price, description, date, imgUrl, tag } = product;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl overflow-hidden">
      {imgUrl && imgUrl.length > 0 && (
        <img
          src={imgUrl[0].url}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{name}</h2>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="mb-3">
          <p className="text-gray-500">Date: <span className="font-medium">{formattedDate}</span></p>
          <p className="text-gray-500">Price: <span className="font-medium">${price}</span></p>
          <p className="text-gray-500">Category: <span className="font-medium">{tag}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
