import React from 'react';
import food from '../assets/food.jpg';

const FeatureCulinary = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1240px] mx-auto text-gray-800">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Tailored Culinary Experience</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Every meal is prepared fresh daily with personalized menus that balance nutrition and flavor. Our residents enjoy delicious, home-style cooking tailored to their tastes and dietary needs.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <img
            src={food}
            alt="Plated meal"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-6 rounded-b-xl">
            <p className="text-lg font-medium">Meals crafted with love, served with care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCulinary;