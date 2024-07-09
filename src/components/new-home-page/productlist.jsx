import React, { useState ,useEffect } from 'react';
import ProductCard from './productcard';

const products = [
  { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/200', description: 'Description of Product 1', buyDate: '2023-01-01', condition: 'New', category: 'Electronics' },
  { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/200', description: 'Description of Product 2', buyDate: '2023-02-01', condition: 'Used', category: 'Study materials' },
  { id: 3, name: 'Product 3', price: 300, image: 'https://via.placeholder.com/200', description: 'Description of Product 3', buyDate: '2023-03-01', condition: 'New', category: 'Clothing' },
  { id: 4, name: 'Product 4', price: 400, image: 'https://via.placeholder.com/200', description: 'Description of Product 4', buyDate: '2023-04-01', condition: 'Refurbished', category: 'Bedding' },
  { id: 5, name: 'Product 5', price: 500, image: 'https://via.placeholder.com/200', description: 'Description of Product 5', buyDate: '2023-05-01', condition: 'New', category: 'Cycle' },
  { id: 6, name: 'Product 6', price: 600, image: 'https://via.placeholder.com/200', description: 'Description of Product 6', buyDate: '2023-06-01', condition: 'Used', category: 'Entertainment' },
  { id: 7, name: 'Product 7', price: 700, image: 'https://via.placeholder.com/200', description: 'Description of Product 7', buyDate: '2023-07-01', condition: 'New', category: 'Miscellaneous' },
  { id: 8, name: 'Product 8', price: 800, image: 'https://via.placeholder.com/200', description: 'Description of Product 8', buyDate: '2023-08-01', condition: 'Refurbished', category: 'Electronics' },
  { id: 9, name: 'Product 9', price: 900, image: 'https://via.placeholder.com/200', description: 'Description of Product 9', buyDate: '2023-09-01', condition: 'New', category: 'Study materials' },
  { id: 10, name: 'Product 10', price: 1000, image: 'https://via.placeholder.com/200', description: 'Description of Product 10', buyDate: '2023-10-01', condition: 'Used', category: 'Clothing' },
  { id: 11, name: 'Product 11', price: 1100, image: 'https://via.placeholder.com/200', description: 'Description of Product 11', buyDate: '2023-11-01', condition: 'New', category: 'Bedding' },
  { id: 12, name: 'Product 12', price: 1200, image: 'https://via.placeholder.com/200', description: 'Description of Product 12', buyDate: '2023-12-01', condition: 'Refurbished', category: 'Cycle' },
];


const categories = ["Electronics", "Study materials", "Clothing", "Bedding", "Cycle", "Entertainment", "Miscellaneous"];

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');


  const handleFilter = () => {
    const filtered = products.filter(product => {
      return (
        (minPrice === '' || product.price >= parseInt(minPrice)) &&
        (maxPrice === '' || product.price <= parseInt(maxPrice)) &&
        (selectedCategory === '' || product.category === selectedCategory)
      );
    });
    setFilteredProducts(filtered);
  };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);



  return (
    <div className="container mx-auto p-4 mt-6 cursor-pointer    ">
      <div className=" shadow-md rounded-lg h-fit  mb-6  px-2 w-full  items-center flex   ">
        <div className="flex flex-col sm:flex-row justify-between h-fit items-center w-full  space-y-4 sm:space-y-0 sm:space-x-">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border p-2 rounded w-full   sm:w-1/3  "
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border-[#925FE2] p-2 rounded w-full   sm:w-1/3 "
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 rounded w-full sm:w-1/3 cursor-pointer"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button
            onClick={handleFilter}
            className="bg-[#925FE2] text-white p-2 rounded w-full text-sm sm:w-auto cursor-pointer"
          >
            Apply Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14 cursor-pointer  ">
      {filteredProducts.map(product => (
        <div
          key={product.id}
          className={`transition-opacity duration-700 ${isMounted ? 'opacity-100' : 'opacity-0'} `}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
    </div>
 
  );
};

export default ProductList;
