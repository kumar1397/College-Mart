import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const InfiniteCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const transitionEnd = setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex === images.length + 1) {
          setCurrentIndex(1);
        } else if (currentIndex === 0) {
          setCurrentIndex(images.length);
        }
      }, 500);
      return () => clearTimeout(transitionEnd);
    }
  }, [currentIndex, isTransitioning, images.length]);

  const clonedImages = [images[images.length - 1], ...images, images[0]];

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-20 h-72 rounded-lg">
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform rounded-lg duration-500 ${isTransitioning ? 'ease-in-out' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {clonedImages.map((image, index) => (
            <div key={index} className="min-w-full rounded-lg">
              <img src={image} alt={`Slide ${index}`} className="w-full h-80 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
      >
        <FaChevronLeft className="text-gray-800 w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
      >
        <FaChevronRight className="text-gray-800 w-6 h-6" />
      </button>
    </div>
  );
};

export default InfiniteCarousel;
