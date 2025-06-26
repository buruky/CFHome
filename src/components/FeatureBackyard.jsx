import React, { useState } from 'react';
import img1 from '../assets/backyard/backyard(1).jpg';
import img2 from '../assets/backyard/backyard(2).jpg';
import img3 from '../assets/backyard/backyard(3).jpg';

const images = [img1, img2, img3];

const FeatureBackyard = () => {
  const [fullscreen, setFullscreen] = useState(null);

  const openFullscreen = (index) => setFullscreen(index);
  const closeFullscreen = () => setFullscreen(null);

  return (
    <section className="relative bg-gradient-to-br from-indigo-50 to-white py-20 px-4">
      <div className="max-w-[1240px] mx-auto text-gray-900">
        <h3 className="text-4xl font-bold mb-6 text-center">Beautiful Backyard & Patio</h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
          Step outside into serene greenery with a wide patio ideal for reflection, connection, and peaceful outdoor time. Our backyard is a favorite retreat for both residents and visiting family.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Backyard view ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openFullscreen(index)}
            />
          ))}
        </div>
      </div>

      {fullscreen !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
          >
            &times;
          </button>
          <img
            src={images[fullscreen]}
            alt={`Fullscreen view ${fullscreen + 1}`}
            className="max-w-6xl max-h-[90vh] rounded-xl shadow-xl transition-opacity duration-500"
          />
        </div>
      )}
    </section>
  );
};

export default FeatureBackyard;
