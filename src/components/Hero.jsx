import React from 'react';
import bgImg from '../assets/main-backgroun.jpg';
import logo from '../assets/logo-white.png';

const Hero = () => {
  return (
    <div
      id="home"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Logo positioned manually with absolute placement */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-[42.5%] left-[40%] w-32 md:w-40 object-contain drop-shadow-lg"
        />


      <div className="w-full h-full bg-black/50 flex items-center">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto px-4 text-white">
          <div className="flex flex-col justify-center md:items-start w-full py-8">
            <p className="text-2xl">Exceptional Senior Care</p>
            <h1 className="py-3 text-5xl md:text-7xl font-bold">Always with Compassion</h1>
            <p className="text-2xl">Comfort, dignity, and expert care for your loved ones.</p>
          </div>
          <div>{/* Empty right column intentionally */}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

