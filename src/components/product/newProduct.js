import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    price: '',
    tag: '',
    category: '',
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Sell Your Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Tag</label>
            <input
              type="text"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Upload Images</label>
            <input
              type="file"
              name="images"
              onChange={handleImageChange}
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              multiple
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full py-4 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
