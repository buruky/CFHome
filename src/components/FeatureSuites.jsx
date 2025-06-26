import React, { useState } from 'react';
import room1 from '../assets/rooms/room.jpg';
import room2 from '../assets/rooms/room(1).jpg';
// import room3 from '../assets/rooms/room(2).jpg';
import room4 from '../assets/rooms/room(3).jpg';

import room6 from '../assets/rooms/room(5).jpg';
import room7 from '../assets/rooms/room(6).jpg';
import room8 from '../assets/rooms/room(7).jpg';


const images = [room1, room2, room4, room7, room6, room8];

const FeatureSuites = () => {
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
    <section className="bg-gradient-to-br from-blue-100 via-indigo-50 to-white py-20 px-4">
      <div className="max-w-[1240px] mx-auto text-center mb-12">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-4">Private Luxury Suites</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Experience privacy and comfort in our elegant suites, each with a full private bathroom and smart amenities to ensure dignity and ease.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <img
          src={images[current]}
          alt={`Room ${current + 1}`}
          onClick={toggleFullscreen}
          className="cursor-pointer w-full h-[28rem] object-cover object-center rounded-2xl shadow-xl transition duration-500 ease-in-out"
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg backdrop-blur"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg backdrop-blur"
        >
          ›
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${index === current ? 'bg-indigo-600' : 'bg-gray-400'} transition-all`}
            />
          ))}
        </div>
      </div>

      {fullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={toggleFullscreen}
        >
          <img
            src={images[current]}
            alt={`Fullscreen Room ${current + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default FeatureSuites;
