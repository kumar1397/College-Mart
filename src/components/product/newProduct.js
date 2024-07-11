// src/components/FormPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/outline';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    price: '',
    category: '',
    images: [],
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validFormats = ['image/jpeg', 'image/png', 'image/jpg'];

    if (files.length > 3) {
      setError('You can upload a maximum of 3 images.');
      return;
    }

    for (let file of files) {
      if (!validFormats.includes(file.type)) {
        setError('Only JPEG, JPG, and PNG formats are allowed.');
        return;
      }
    }

    setError('');
    setFormData({
      ...formData,
      images: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.images.length > 3) {
      setError('You can upload a maximum of 3 images.');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('date', formData.date);
    data.append('price', formData.price);
    data.append('category', formData.category);
    formData.images.forEach((image, index) => {
      data.append(`images[${index}]`, image);
    });

    try {
      const response = await fetch('/api/listing', {
        method: 'POST',
        body: data,
      });
      
      if (response.ok) {
        
        console.log('Form submitted successfully');
      } else {
        
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong.');
      }
    } catch (error) {
      setError('Failed to submit form.');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-500 via-[#925FE2] to-purple-700 flex items-center justify-center bg-[linear-gradient(58.2deg,rgba(40,91,212,0.73) -3%,rgba(171,53,163,0.45) 49.3%,rgba(255,204,112,0.37) 97.7%)]">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 flex relative">
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 flex items-center px-3 py-1.5 text-white bg-[#925FE2] hover:bg-[#7d4fbb] rounded-md shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#925FE2] transition duration-300"
        >
          <ChevronLeftIcon className="h-4 w-4 mr-1" />
          Back
        </button>

        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-[#925FE2]">Picture Upload Guidelines</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Ensure pictures are clear and well-lit.</li>
            <li>Only upload pictures of the item you are listing.</li>
            <li>Do not upload offensive or inappropriate images.</li>
            <li>Maximum file size is 5MB per image.</li>
            <li>Accepted formats: JPEG, PNG.</li>
            <li>Maximum of 3 images allowed.</li>
          </ul>
        </div>

        <div className="border-r border-[#925FE2] mx-4"></div>

        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-[#925FE2]">List Your Item</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#925FE2]">Item Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter the name of your item"
                className="mt-1 block w-full px-3 py-2 border border-[#925FE2] rounded-md shadow-sm focus:outline-none focus:ring-[#925FE2] focus:border-[#925FE2] sm:text-sm transition duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#925FE2]">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a detailed description of your item"
                className="mt-1 block w-full px-3 py-2 border border-[#925FE2] rounded-md shadow-sm focus:outline-none focus:ring-[#925FE2] focus:border-[#925FE2] sm:text-sm transition duration-300"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#925FE2]">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-[#925FE2] rounded-md shadow-sm focus:outline-none focus:ring-[#925FE2] focus:border-[#925FE2] sm:text-sm transition duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#925FE2]">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter the price"
                className="mt-1 block w-full px-3 py-2 border border-[#925FE2] rounded-md shadow-sm focus:outline-none focus:ring-[#925FE2] focus:border-[#925FE2] sm:text-sm transition duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#925FE2]">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-[#925FE2] bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#925FE2] focus:border-[#925FE2] sm:text-sm transition duration-300"
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
              <label className="block text-sm font-medium text-[#925FE2]">Upload Pictures</label>
              <input
                type="file"
                name="images"
                multiple
                accept="image/jpeg,image/png,image/jpg"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#925FE2] file:text-white hover:file:bg-[#7d4fbb] transition duration-300"
              />
              {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#925FE2] hover:bg-[#7d4fbb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#925FE2] transition duration-300"
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
