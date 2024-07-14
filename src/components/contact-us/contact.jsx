import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-8">Any questions or remarks?</p>
      
      <div className="flex flex-wrap w-full max-w-6xl min-h-[70vh]">
        
        <div className="w-full md:w-1/2 p-8 relative" style={{ backgroundColor: '#9C6FE4', color: 'white' }}>
          <h2 className="text-2xl font-bold ml-7 mt-5 mb-4 absolute top-0 left-0">Contact Information</h2>
          
          <div className="flex items-start pt-20 mb-4">
            <div className="mr-4">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p>collegemart@nitrkl.com</p>
          </div>
          <div className="flex items-start pt-10 mb-4">
            <div className="mr-4">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p>+91 7855906161</p>
          </div>
          <div className="flex pt-10 items-start mb-8">
            <div className="mr-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <p>Nit Rourkela </p>
          </div>

          <div className="flex justify-between">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">Instagram</a>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 bg-white text-black">
          <form>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2" htmlFor="firstName">First Name</label>
                <input className="w-full px-3 py-2 border rounded-lg" type="text" id="firstName" name="firstName" required />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2" htmlFor="lastName">Last Name</label>
                <input className="w-full px-3 py-2 border rounded-lg" type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border rounded-lg" type="email" id="email" name="email" required />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                <input className="w-full px-3 py-2 border rounded-lg" type="tel" id="phone" name="phone" required />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border rounded-lg" id="message" name="message" rows="5" required></textarea>
            </div>
            <div>
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
