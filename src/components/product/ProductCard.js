import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import VerticalCarousel from './crousal';

function ProductFormCard() {
  const [product, setProduct] = useState({
    image: '',
    name: '',
    buyDate: '',
    condition: '',
    details: '',
    price: ''
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending data to an API
    console.log(product);
  };

  return (
    <div className="bg-black h-screen w-full flex justify-center items-center">
      <div className="w-full md:w-[90%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row my-2">
        {/* Left section for product rules */}
        <div className="w-full h-[400px] lg:h-auto lg:w-1/2 p-4 bg-gray-800 text-white flex flex-col items-center">
        <VerticalCarousel/>
          <h2 className="text-2xl font-semibold mb-4 text-red-500">Product Selling Rules</h2>
          <ul className="list-disc pl-5">
            <li>Products must be in good condition.</li>
            <li>Provide accurate product details.</li>
            <li>Upload clear and high-quality product images.</li>
            <li>Set a reasonable price for your product.</li>
            <li>Ensure timely delivery after purchase.</li>
          </ul>
        </div>

        {/* Right section for product form */}
        <div className="w-full lg:w-1/2 bg-[#8C52FF]  p-8 ">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6 text-white">Upload Product</h2>

            {/* Upload Image section */}
            <div>
              <label htmlFor="image" className="block text-sm font-semibold mb-1 text-white">Product Image</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border border-gray-300 text-gray-500 bg-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Product Name section */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1 text-white">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
                className="w-full px-3 py-2 border bg-gray-200  border-gray-300 text-white rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Buy Date and Condition section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="buyDate" className="block text-sm font-semibold mb-1 text-white">Buy Date</label>
                <input
                  type="date"
                  id="buyDate"
                  name="buyDate"
                  value={product.buyDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-sm text-gray-500  border-gray-300 rounded-md  focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="condition" className="block text-sm font-semibold text-white mb-1">Condition</label>
                <select
                  id="condition"
                  name="condition"
                  value={product.condition}
                  onChange={handleInputChange}
                  className="w-full px-3 py-[8.9px] border text-sm  border-gray-300 rounded-md bg-gray-200  focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select condition</option>
                  <option value="New">New</option>
                  <option value="Used - Like New">Used - Like New</option>
                  <option value="Used - Good">Used - Good</option>
                  <option value="Used - Fair">Used - Fair</option>
                </select>
              </div>
            </div>

            {/* Product Details section */}
            <div>
              <label htmlFor="details" className="block text-sm font-semibold mb-1 text-white">Product Details</label>
              <textarea
                id="details"
                name="details"
                value={product.details}
                onChange={handleInputChange}
                placeholder="Enter product details"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 bg-gray-200  rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Product Price section */}
            <div>
              <label htmlFor="price" className="block text-sm font-semibold mb-1 text-white">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                placeholder="Enter product price"
                className="w-full px-3 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full  bg-gray-200 text-[#8C52FF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductFormCard;
