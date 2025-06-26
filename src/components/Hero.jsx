import React from 'react';
import bgImg from '../assets/main-backgroun.jpg';
import logo from '../assets/logo-white.png';

const Hero = () => {
  return (
    <div
      id="home"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
    <div className="w-full h-full bg-black/50 flex items-center">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto px-4 text-white relative">
        
        {/* Logo - stacks above text on small screens, moves on md+ */}
        <div className="flex flex-col items-center sm:items-start w-full py-4">
          <img
            src={logo}
            alt="Logo"
            className="w-24 md:absolute md:top-[24.5%] md:left-[35%] md:w-32 lg:w-40 object-contain drop-shadow-lg z-20"
          />
          <p className="text-2xl mt-4 md:mt-0">Exceptional Senior Care</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Always with Compassion</h1>
          <p className="text-2xl">Comfort, dignity, and expert care for your loved ones.</p>
        </div>

        <div>{/* empty right column */}</div>
      </div>
    </div>
  </div>
  );
};

export default Hero;

