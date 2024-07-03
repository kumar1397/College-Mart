import React from 'react';

const Modal = ({ show, onClose, product }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>
          &times;
        </button>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <h2 className="text-xl font-bold mt-2">{product.name}</h2>
        <p className="text-gray-600">{product.price}</p>
        <div className="mt-4">
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Buy Date:</strong> {product.buyDate}</p>
          <p><strong>Condition:</strong> {product.condition}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
