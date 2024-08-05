import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ["Electronics", "Study materials", "Personal belongings", "Cycle", "Entertainment", "Miscellaneous"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://college-mart.onrender.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = () => {
    const filtered = products.filter(product => {
      return (
        (minPrice === '' || product.price >= parseInt(minPrice)) &&
        (maxPrice === '' || product.price <= parseInt(maxPrice)) &&
        (selectedCategory === '' || product.tag === selectedCategory)
      );
    });
    setFilteredProducts(filtered);
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Filter Section */}
      <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4"> Products</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full sm:w-1/3"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full sm:w-1/3"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full sm:w-1/3 cursor-pointer"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button
            onClick={handleFilter}
            className="bg-[#925FE2] text-white p-3 rounded w-full sm:w-auto hover:bg-purple-700 transition"
          >
            Apply Filter
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div
            key={product._id}
            className={`transition-opacity duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
