import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Ensure the path is correct

const categories = ["Electronics", "Study materials", "Clothing", "Bedding", "Cycle", "Entertainment", "Miscellaneous"];

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

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
    <div className="container mx-auto p-4 mt-6 cursor-pointer">
      <div className="shadow-md rounded-lg h-fit mb-6 px-2 w-full items-center flex">
        <div className="flex flex-col sm:flex-row justify-between h-fit items-center w-full space-y-4 sm:space-y-0 sm:space-x-">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border p-2 rounded w-full sm:w-1/3"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border-[#925FE2] p-2 rounded w-full sm:w-1/3"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14 cursor-pointer">
        {filteredProducts.map(product => (
          <div
            key={product._id}
            className={`transition-opacity duration-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
