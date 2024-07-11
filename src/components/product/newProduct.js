// src/components/FormPage.js

import React, { useState } from 'react';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    price: '',
    category: '', 
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: [...e.target.files],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 flex">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Picture Upload Guidelines</h2>
          <ul className="list-disc list-inside">
            <li>Ensure pictures are clear and well-lit.</li>
            <li>Only upload pictures of the item you are listing.</li>
            <li>Do not upload offensive or inappropriate images.</li>
            <li>Maximum file size is 5MB per image.</li>
            <li>Accepted formats: JPEG, PNG.</li>
          </ul>
        </div>

        <div className="border-r border-gray-300"></div>

        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">List Your Item</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Item Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter the name of your item"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a detailed description of your item"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter the price"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="cycle">Cycle</option>
                <option value="books">Books</option>
                <option value="clothing">Clothing</option>
                <option value="furniture">Furniture</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Upload Pictures</label>
              <input
                type="file"
                name="images"
                multiple
                accept="image/jpeg,image/png"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
