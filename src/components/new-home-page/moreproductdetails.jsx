// CardComponent.js
import React from 'react';
import ProductCard from './productcard';

const CardComponent = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full ">
      <h2 className="text-2xl font-bold mb-2">Card Title</h2>
      <p className="text-gray-700 bg-green-500">This is a card component with some content inside.</p>
      <h3>{
        <p><strong>Description of product:</strong> {product.description}</p>
      }</h3>
    </div>
  );
};
/////wfgweifyugdcfeydfceuyfcgeuyce
///wefewuyfwieyyg

export default CardComponent;
