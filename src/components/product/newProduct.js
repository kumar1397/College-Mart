// src/components/FormPage.js

import React, { useState } from 'react';

function FormPage() {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    price: '',
    pictures: [],
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
      pictures: [...e.target.files],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex h-screen">
      {/* Rules Section */}
      <div className="w-1/2 bg-gray-200 p-8">
        <h2 className="text-2xl font-bold mb-4">Picture Upload Guidelines</h2>
        <ul className="list-disc list-inside">
          <li>Ensure pictures are clear and well-lit.</li>
          <li>Only upload pictures of the item you are listing.</li>
          <li>Do not upload offensive or inappropriate images.</li>
          <li>Maximum file size is 5MB per image.</li>
          <li>Accepted formats: JPEG, PNG.</li>
        </ul>
      </div>

      {/* Form Section */}
      <div className="w-1/2 bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">List Your Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Item Name</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Pictures</label>
            <input
              type="file"
              name="pictures"
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
  );
}

export default FormPage;
