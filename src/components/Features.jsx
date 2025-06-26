import React from 'react';
import FeatureCaregiver from './FeatureCaregiver';
import FeatureSuites from './FeatureSuites';
import FeatureLivingSpaces from './FeatureLivingSpaces';
import FeatureBackyard from './FeatureBackyard';
import FeatureCulinary from './FeatureCulinary';
import house from '../assets/house.jpg';

const Features = () => (
  <div id="features" className="w-full">
    {/* Full-width Banner Image with Overlay Title */}
    <div className="relative w-full aspect-[3/1] overflow-hidden">
      <img
        src={house}
        alt="Care home exterior"
        className="w-full h-full object-cover [object-position:center]"
      />

      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-t from-transparent to-white z-10" />

      {/* Title overlay */}
      <div className="absolute inset-40 flex items-start justify-center pt-16 z-20">
          <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg text-center px-4">
              Always with Compassion — Our Home
          </h2>
      </div>
  </div>


    {/* Smooth transition padding instead of gap */}
    <div className="bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Our family home, situated in a calm nieghborhood a few minutes from the Puget Sound and Narrow Bridge, offers thoughtfully curated spaces, compassionate staff, and premium amenities designed to help our residents thrive. 
        </p>
      </div>
    </div>

    <FeatureCaregiver />
    <FeatureCulinary />
    <FeatureSuites />
    <FeatureLivingSpaces />
    <FeatureBackyard />
    
  </div>
);

export default Features;


