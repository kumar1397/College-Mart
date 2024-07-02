import React from 'react';
import ProductCard from './productcard';

const products = [
  { id: 1, name: 'Product 1', price: '$100', image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/200' },
  { id: 1, name: 'Product 1', price: '$100', image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/200' },
];

const ProductList = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
