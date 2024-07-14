import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-2 mt-8">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6">Any questions or remarks? Just leave us a message.</p>
      
      <div className="flex flex-wrap w-full max-w-6xl min-h-[75vh]">
        <div className="w-full md:w-1/2 p-8 relative flex flex-col" style={{ backgroundColor: '#9C6FE4', color: 'white' }}>
          <h2 className="text-2xl font-bold ml-7 mt-5 mb-4 absolute top-0 left-0">Contact Information</h2>
          
          <div className="flex items-start pt-12 mb-4">
            <div className="mr-4">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p className="ml-2">collegemart@nitrkl.com</p>
          </div>
          <div className="flex items-start pt-6 mb-4">
            <div className="mr-4">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p className="ml-2">+91 7855906161</p>
          </div>
          <div className="flex pt-6 items-start mb-6">
            <div className="mr-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <p className="ml-2">Nit Rourkela</p>
          </div>

          <div className="flex justify-between mt-auto space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 bg-white text-black">
          <form>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2" htmlFor="firstName">First Name</label>
                <input className="w-full bg-transparent focus:outline-none" type="text" id="firstName" name="firstName" required />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2" htmlFor="lastName">Last Name</label>
                <input className="w-full bg-transparent focus:outline-none" type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input className="w-full bg-transparent focus:outline-none" type="email" id="email" name="email" required />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                <input className="w-full bg-transparent focus:outline-none" type="tel" id="phone" name="phone" required />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none" id="message" name="message" rows="5" required></textarea>
            </div>
            <div className="flex justify-end">
              <button className="w-1/2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-black text-white py-8 px-4 w-full mt-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">College Mart</h3>
          <div className="border-t border-gray-600 w-full mb-4"></div>
          <div className="grid grid-cols-4 gap-4 w-full mb-4">
            <div>
              <h4 className="text-lg font-bold mb-2">Reach Us</h4>
              <p>Address: Nit Rourkela</p>
              <p>Email: collegemart@nitrkl.com</p>
              <p>Phone: +91 7855906161</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Company</h4>
              <p>About Us</p>
              <p>Our Team</p>
              <p>Careers</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Legal</h4>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookie Policy</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Join Our Newsletter</h4>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg bg-gray-200 focus:outline-none" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
