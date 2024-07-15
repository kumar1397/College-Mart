import React from "react";
import ProductComponent  from "./UserProfile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../new-home-page/navbar";
const products = [
    {
        id: 1,
        name: "Product 1",
        tag: "Tag 1",
        buyDate: "2023-01-01",
        condition: "New",
        description: "Description of Product 1",
        images: ["/logo192.png", "/shoes01.webp","/ycle.webp"]
    },
    {
        id: 2,
        name: "Product 2",
        tag: "Tag 2",
        buyDate: "2023-02-01",
        condition: "Used",
        description: "Description of Product 2",
        images: ["/logo192.png", "/shoes01.webp","/ycle.webp"]
    },
    {
        id: 3,
        name: "Product 3",
        tag: "Tag 3",
        buyDate: "2023-02-01",
        condition: "Used",
        description: "Description of Product 2",
        images: ["/logo192.png", "/shoes01.webp","/ycle.webp"]
    }

];
export default function Profile() {
    return (
        <>
        <Navbar />
        <div class="  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900  h-[100vh] overflow-scroll dark:bg-gray-800 flex  flex-wrap justify-start items-center bg-gray-500">
         
        <div class="container lg:w-2/6 xl:w-2/7 my-16 mx-8 rounded-lg sm:w-full md:w-2/3 bg-white shadow-xl h-fit transform duration-200 easy-in-out">
            <div class="h-32 overflow-hidden">
                {/* <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" /> */}
            </div>
            <div class="flex justify-center px-5 -mt-12">
                <img class="h-32 w-32 bg-white p-2 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
            </div>
            <div class=" rounded-lg">
                <div class="text-center px-14">
                    <h2 class="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
                    <p class="text-gray-500 text-sm mt-2">mohit@example.com</p>
                    <p class="text-gray-500 text-sm mt-2">Hall Name: Example Hall</p>
                    <p class="text-gray-500 text-sm mt-2">Phone: (123) 456-7890</p>
                    <p class="text-gray-500 text-sm mt-2">Number of Posts: 150</p>   
                </div>
                <hr class="mt-6" />
                <div class="flex bg-gray-50 rounded-lg">
                    <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                        <p><span class="font-semibold">2.5k </span> Followers</p>
                    </div>
                    <div class="border"></div>
                    <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                        <p><span class="font-semibold">2.0k </span> Following</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container lg:w-2/6 xl:w-2/7 my-16 mx-8 rounded-lg sm:w-full md:w-2/3 bg-white shadow-xl h-fit transform duration-200 ease-in-out">
                    <div className="p-6">
                        <div className="text-center">
                            <h2 className="text-gray-800 text-3xl font-bold">Products Posted</h2>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={() => setShowProducts(!showProducts)}
                            >
                                {showProducts ? "Hide Products" : "Show Products"}
                            </button>
                        </div>
                        {showProducts && (
                            <div className="mt-6">
                                {products.map((product, index) => (
                                    <div key={product.id} className="mb-6 border-b pb-4">
                                        <h3 className="text-gray-800 text-xl font-bold">{product.name}</h3>
                                        <p className="text-gray-500 text-sm">{product.tag}</p>
                                        <p className="text-gray-500 text-sm">Buy Date: {product.buyDate}</p>
                                        <p className="text-gray-500 text-sm">Condition: {product.condition}</p>
                                        <p className="text-gray-500 text-sm">Description: {product.description}</p>
                                        <div className="flex">
                                            {product.images.map((image, imgIndex) => (
                                                <img key={imgIndex} src={image} alt={`Product ${product.id}`} className="w-16 h-16 mr-2 rounded-lg" />
                                            ))}
                                        </div>
                                        {index === 0 && <p className="text-green-500 text-sm">Status: Sold</p>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
        </div>
    </div>
    </>
    

    )
}