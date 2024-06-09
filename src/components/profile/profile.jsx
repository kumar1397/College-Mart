import React from "react";


export default function Profile() {
    return (
        <div className="flex flex-col justify-start items-center h-screen bg-red-300">
            <div className="bg-white h-fit rounded-lg shadow-lg p-8 my-3 mx-auto max-w-[1200px] w-[90%] sm:w-[90%] sm:flex sm:justify-between">
                <div className="w-full sm:w-[40%] flex justify-center items-center">
                    <div className=" w-44 h-44 rounded-full bg-green-200 flex justify-center items-center">01</div>
                </div>
                <div className="w-full sm:w-[60%] mt-1  p-4 rounded-lg relative ">
                    <h1 className="text-2xl font-bold mb-2 text-black">Anubhav Shaurya</h1>
                    <div className="w-[70%] bg-red-400 absolute bottom-0 flex flex-row right-0 h-10 shadow-lg  ">
                        <div class="w-1/2 bg-white flex items-center justify-center p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fill-rule="evenodd" d="M10 2C5.03 2 1 6.17 1 10c0 1.72.56 3.3 1.52 4.58l-1.02 3.35 3.35-1.02A9.953 9.953 0 0010 18c4.97 0 9-4.17 9-8 0-3.83-4.03-8-9-8zm-7.48 8.48a8.013 8.013 0 012.1-4.58L7.1 7.9a4 4 0 104.8 4.8l1.1-1.1a6 6 0 11-6.68-6.68L4.42 7.9a8.013 8.013 0 01-1.9 4.58zm6.76-.75l-1.02 1.02a2.5 2.5 0 11-3.54-3.54l1.02-1.02a4.5 4.5 0 106.36 6.36z" clip-rule="evenodd" />
                            </svg>
                            <p class="text-gray-700 text-sm">Post</p>
                            
                        </div>
                        <div class="w-1/2 bg-white flex items-center justify-center p-4 hover:bg-blue-400 transition-all ease-in-out" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 mt-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M6 2a2 2 0 012 2v7l-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm11.71 3.29a1 1 0 010 1.42l-7 7a1 1 0 01-1.42 0l-4-4a1 1 0 111.42-1.42L10 10.59l6.29-6.3a1 1 0 011.42 0z" clip-rule="evenodd" />
                            </svg>
                            <p class="text-gray-700 text-sm">Message</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}