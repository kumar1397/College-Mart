import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="mt-2 font-bold text-lg">{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Buy Date: {product.buyDate}</p>
      <p>Condition: {product.condition}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductCard;
