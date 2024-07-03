import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Commerce</h1>
        <nav>
          <a href="/" className="px-4 hover:underline">Hossme</a>
          <a href="/about" className="px-4 hover:underline">About</a>
          <a href="/contact" className="px-4 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
