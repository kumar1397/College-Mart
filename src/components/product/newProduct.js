import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Spinner from '../spinner/Spinner';
import Navbar from '../new-home-page/navbar';

function FormPage() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    setLoading(true);
    setTimeout(() => setLoading(false), 400);

    return () => {};
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    price: '',
    tag: '',
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
    if (files.length > 3) {
      setError('You can upload a maximum of 3 images.');
      return;
    }
    // if(files.length==0){
    //   setError('Please select a image.');
    //   return;
    // }
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
    data.append('tag', formData.tag);

    formData.images.forEach((image, index) => {
      data.append(`filename`, image);
    });

    try {
      const response = await fetch('https://college-mart.onrender.com/upload/fileUpload', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setError('');
        setShowPopup(true); // Show the pop-up
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

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <div className="relative min-h-screen flex items-center justify-center bg-[#252525]">
            <div className="w-full max-w-5xl bg-[#383838] rounded-lg tshadow p-8 flex relative shadow-md shadow-[#925FE2]">
              <button
                onClick={handleBack}
                className="absolute top-4 left-4 flex items-center px-3 py-1.5 text-[#925FE2] bg-transparent hover:bg-[#7d4fbb] rounded-md shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#925FE2] transition duration-300"
              >
                <MdOutlineKeyboardArrowLeft className="h-4 w-4 mr-1" />
                Back
              </button>

              <div className="w-1/2 p-4 flex flex-col justify-center">
                <h2 className="text-[35px] font-bold mb-4 text-[#925FE2]">Upload Guidelines</h2>
                <ul className="list-disc list-inside text-[#f5f5f5] space-y-2 text-md">
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
                <form onSubmit={handleSubmit} className="space-y-5 font-medium text-xl text-white">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Item name"
                      className="mt-1 block w-full px-3 py-2 border-2 border-[#925FE2] bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-[#925FE2] focus:border-[#925FE2] sm:text-sm transition duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      maxLength={100}
                      placeholder="Provide a detailed description of your item"
                      className="mt-1 block w-full px-3 py-2 border-2 border-[#925FE2] bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-[#925FE2] focus:border-[#925FE2] sm:text-sm transition duration-300"
                    ></textarea>
                  </div>
                  <div>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border-2 border-[#925FE2] bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-[#925FE2] focus:border-[#925FE2] sm:text-sm transition duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Enter the price"
                      className="mt-1 block w-full px-3 py-2 border-2 border-[#925FE2] bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-[#925FE2] focus:border-[#925FE2] sm:text-sm transition duration-300"
                    />
                  </div>
                  <div>
                    <select
                      name="tag"
                      value={formData.tag}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border-2 border-[#925FE2] bg-[#383838] rounded-md shadow-sm focus:outline-none focus:ring-[#925FE2] focus:border-[#925FE2] sm:text-sm transition duration-300"
                    >
                      <option value="" disabled>Select a category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Study materials">Study materials</option>
                      <option value="Personal belongings">Personal belongings</option>
                      <option value="Cycle">Cycle</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="file"
                      name="images"
                      multiple
                      accept="image/jpeg,image/png,image/jpg"
                      onChange={handleFileChange}
                      className="mt-1 block w-full text-sm bg-transparent text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#925FE2] file:text-black hover:file:bg-[#7d4fbb] transition duration-300"
                    />
                    {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border font-semibold border-transparent shadow-sm text-sm rounded-md text-black bg-[#925FE2] hover:bg-[#7d4fbb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#925FE2] transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Success</h3>
                <p><i class="fas fa-check-circle"></i> Your product has been successfully uploaded.</p>
                <button
                  onClick={closePopup}
                  className="mt-4 px-4 py-2 bg-[#925FE2] text-white rounded-md shadow-md hover:bg-[#7d4fbb] transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default FormPage;
