'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/ai-content-generator.PNG', // Replace these with your actual image paths
  '/images/ecommerce.PNG',
  '/images/netflix.PNG',
  '/images/weather.PNG'
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mb-48">
      <div className="relative overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2">
        <button
          onClick={goToPrevious}
          className="text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
        >
          ❮
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2">
        <button
          onClick={goToNext}
          className="text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
