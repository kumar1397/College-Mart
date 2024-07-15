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
            <div className="bg-black-100 h-full min-h-screen flex flex-col items-center">
                <div className="container mx-auto my-16 px-8 lg:flex lg:space-x-8">
                    <div className="lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="h-32 bg-gray-200"></div>
                        <div className="flex justify-center -mt-16">
                            <img className="h-32 w-32 bg-white p-2 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="Profile" />
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-semibold text-gray-800">Mohit Dhiman</h2>
                            <p className="text-gray-600">mohit@example.com</p>
                            <p className="text-gray-600">Hall Name: Example Hall</p>
                            <p className="text-gray-600">Phone: (123) 456-7890</p>
                            <p className="text-gray-600">Number of Posts: 150</p>
                            <div className="mt-6 flex justify-around">
                                <div className="text-center">
                                    <p className="font-semibold text-gray-800">2.5k</p>
                                    <p className="text-gray-600">Followers</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-semibold text-gray-800">2.0k</p>
                                    <p className="text-gray-600">Following</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-2/3 mt-8 lg:mt-0 bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 text-center">Products Posted</h2>
                            <div className="mt-6 space-y-6">
                                {products.map((product, index) => (
                                    <div key={product.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                                        <p className="text-gray-600">{product.tag}</p>
                                        <p className="text-gray-600">Buy Date: {product.buyDate}</p>
                                        <p className="text-gray-600">Condition: {product.condition}</p>
                                        <p className="text-gray-600">Description: {product.description}</p>
                                        <div className="mt-2 flex space-x-2">
                                            {product.images.map((image, imgIndex) => (
                                                <img key={imgIndex} src={image} alt={`Product ${product.id}`} className="w-16 h-16 rounded-lg shadow-sm" />
                                            ))}
                                        </div>
                                        {index === 0 && <p className="mt-2 text-green-500 font-semibold">Status: Sold</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    

    )
}