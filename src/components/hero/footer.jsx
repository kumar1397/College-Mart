import React from 'react';
import { useEffect } from 'react';



const Footer = () => {
    useEffect(() => {
        const tailwindLink = document.createElement('link');
        tailwindLink.rel = 'stylesheet';
        tailwindLink.href = 'https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css';
        document.head.appendChild(tailwindLink);

        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
        document.head.appendChild(fontAwesomeLink);

        // Cleanup function to remove the links when the component is unmounted
        return () => {
            document.head.removeChild(tailwindLink);
            document.head.removeChild(fontAwesomeLink);
        };
    }, []);
    
    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6 ">
            <div className="container mx-auto px-4 ">
                <div className="flex flex-wrap text-left lg:text-left ">
                    <div className="w-full lg:w-6/12 px-4 ">
                        <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button
                                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button
                                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-facebook-square"></i>
                            </button>
                            <button
                                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-dribbble"></i>
                            </button>
                            <button
                                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-github"></i>
                            </button>
                            <div className='flex justify-between flex-row my-12'>
                                <div className='f'>
                                    <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                                    <div class="flex flex-col items-start mt-5 space-y-2">
                                        <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                                        <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">About Us</p>
                                        <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Feedback</p>
                                    </div>
                                </div>

                                <div>
                                    <p class="font-semibold text-gray-800 dark:text-white">Customer Help</p>

                                    <div class="flex flex-col items-start mt-5 space-y-2">
                                        <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Common Questions</p>
                                        <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Privacy</p>
                                        <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Rules and Regulations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4 flex justify-end ">
                        {/* <div>
                            <img className="w-40 shadow-md rounded-full " src="collegelogo.svg" alt="College Logo" />
                        </div> */}
                        <div className="flex flex-wrap mt-6 text-left lg:text-left w-fit ">
                            <div className="w-full lg:w-6/12 px-4">
                                <h4 className="text-2xl font-semibold text-blueGray-700">Contact Us</h4>
                                <form className="mt-4">
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="px-3 py-2 border-gray-300  bg-white rounded text-sm shadow focus:outline-none focus:ring w-[300px]"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="px-3 py-2 border-gray-300  bg-white rounded text-sm shadow focus:outline-none focus:ring w-[300px]"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <textarea
                                            placeholder="Your Message"
                                            className="px-3 py-2  border-gray-300   bg-white rounded text-sm shadow-md   w-[300px]"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
  <div className="w-full md:w-4/12 px-4 mx-auto text-center">
    <div className="text-sm text-blueGray-500 font-semibold py-1">
      © 2023 College Mart. All rights reserved - 
      <span> ❤️ <a href='https://www.linkedin.com/in/anurag-roy-has-cutome-url/'>Designed by Anurag</a>,</span>
      <span>  ❤️ <a href='https://www.linkedin.com/in/iswar-kumar-sahu-a01b721a2/'>Developed by Kumar</a>, <a href="https://www.linkedin.com/in/anubhav-shaurya-4b3946257/">Anubhav</a>, <a href="https://www.linkedin.com/in/prateek-kumar-nayak-72976822a/">Prateek</a>,<a href="https://www.linkedin.com/in/mahaprasad-prusty-0163a21b1/">Mahaprasad</a> and <a href="https://www.linkedin.com/in/tanisha-pati-06ab79271/">Tanisha</a>. </span> 
    </div>
  </div>
</div>


            </div>
        </footer>
    );
};

export default Footer;