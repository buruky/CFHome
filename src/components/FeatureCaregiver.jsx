import React, { useRef, useEffect } from 'react';
import caretaker from '../assets/caretaker.jpg';

const FeatureCaregiver = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-[1240px] mx-auto relative">
        <div className="absolute inset-0 -top-10 opacity-10" ref={imageRef}>
          <img
            src={caretaker}
            alt="Background caregiver silhouette"
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-out"
          />
        </div>

        <div className="relative z-10 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl p-10 flex flex-col items-center text-center">
          <div className="w-64 h-64 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={caretaker} alt="Dedicated caregiver" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-4xl font-extrabold mb-4 text-gray-800">Dedicated Caregiver Support</h3>
          <p className="text-lg text-gray-700 max-w-2xl">
            With one caregiver for every three residents, our home ensures compassionate, individualized attention 24/7. Each caregiver fosters meaningful relationships and emotional trust, providing not just assistance but comfort every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCaregiver;