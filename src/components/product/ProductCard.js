import React, { useState } from 'react';
import InfiniteScrollContainer from './newcrousal';

function ProductFormCard() {
  const [product, setProduct] = useState({
    filename: '',
    name: '',
    buyDate: '',
    tag: '',
    condition: '',
    details: '',
    price: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const { name, value } = e.target;
    const newvalue = value.split('\\')[2];
    setProduct({ ...product, [name]: newvalue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('filename', product.filename);
    formData.append('name', product.name);
    formData.append('buyDate', product.buyDate);
    formData.append('tag', product.tag);
    formData.append('condition', product.condition);
    formData.append('details', product.details);
    formData.append('price', product.price);

    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/upload/fileUpload`, {
      method: "POST",
      body: formData,  // The browser will automatically set the appropriate Content-Type header
    });

    const data = await res.json();
    if (res.status === 400) {
      window.alert(data.message);
    } else {
      window.alert(`file uploaded`);
    }
  };

  return (
    <div className="bg-black h-screen w-full flex justify-center items-center">
      <div className="w-full md:w-[90%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row my-2">
        <div className="w-full h-[400px] lg:h-auto lg:w-1/2 p-4 bg-gray-800 text-white flex justify-around flex-col items-center">
          <div className='bg-red-400 w-full'>
            <InfiniteScrollContainer/>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#8C52FF]  p-8 ">
          <form method="POST" onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6 text-white">Upload Product</h2>

            <div>
              <label htmlFor="image" className="block text-sm font-semibold mb-1 text-white">Product Image</label>
              <input
                type="file"
                name="filename"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border border-gray-300 text-gray-500 bg-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

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

            <div>
              <label htmlFor="condition" className="block text-sm font-semibold mb-1 text-white">Product Condition</label>
              <input
                type="text"
                id="condition"
                name="condition"
                value={product.condition}
                onChange={handleInputChange}
                placeholder="Enter product condition"
                className="w-full px-3 py-2 border bg-gray-200  border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

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
                <label htmlFor="tag" className="block text-sm font-semibold text-white mb-1">Tag</label>
                <select
                  id="tag"
                  name="tag"
                  value={product.tag}
                  onChange={handleInputChange}
                  className="w-full px-3 py-[8.9px] border text-sm  border-gray-300 rounded-md bg-gray-200  focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select condition</option>
                  <option value="electronics">Electronics</option>
                  <option value="study materials">Study materials</option>
                  <option value="personal material">Personal material</option>
                  <option value="miscellaneous">Miscellaneous</option>
                </select>
              </div>
            </div>

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
