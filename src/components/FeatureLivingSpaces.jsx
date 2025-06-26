import React, { useState } from 'react';
import img1 from '../assets/livingspaces/livingspace(1).jpg';
import img2 from '../assets/livingspaces/livingspace(2).jpg';
import img3 from '../assets/livingspaces/livingspace(3).jpg';
import img4 from '../assets/livingspaces/livingspace(4).jpg';
import img5 from '../assets/livingspaces/livingspace(5).jpg';
import img6 from '../assets/livingspaces/livingspace(6).jpg';

const images = [img3, img1, img2, img4, img5, img6];

const FeatureLivingSpaces = () => {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleFullscreen = () => {
    setFullscreen((prev) => !prev);
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-white via-indigo-50 to-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h3 className="text-5xl font-bold text-gray-800 mb-6">Inviting Living Spaces</h3>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          Our spacious, cozy common areas feel just like home—perfect for relaxing, socializing, and enjoying daily activities in comfort.
        </p>

        <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl shadow-xl border border-gray-200">
          <img
            src={images[current]}
            alt={`Living Space ${current + 1}`}
            onClick={toggleFullscreen}
            className="cursor-pointer w-full h-[500px] object-cover transition duration-700 ease-in-out"
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
            <button
              onClick={handlePrev}
              className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-2 shadow"
            >
              ‹
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
            <button
              onClick={handleNext}
              className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-2 shadow"
            >
              ›
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${index === current ? 'bg-indigo-600' : 'bg-gray-300'} transition-all`}
              />
            ))}
          </div>
        </div>
      </div>

      {fullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={toggleFullscreen}
        >
          <img
            src={images[current]}
            alt={`Fullscreen Living Space ${current + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default FeatureLivingSpaces;

