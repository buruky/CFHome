import { useEffect, useState } from 'react';
import logoWhite from '../assets/logo-white.png';
import logoDark from '../assets/logo-black.png';

const NavBar = () => {
  const [textColor, setTextColor] = useState('text-white');
  const [logoSrc, setLogoSrc] = useState(logoWhite);

  useEffect(() => {
  const heroSection = document.querySelector('#home'); // section with dark background
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTextColor('text-white');
        setLogoSrc(logoWhite);
      } else {
        setTextColor('text-gray-900');
        setLogoSrc(logoDark);
      }
    },
    {
      root: null, // viewport
      threshold: 0.1, // 10% in view triggers change
    }
  );

  if (heroSection) {
    observer.observe(heroSection);
  }

  return () => {
    if (heroSection) observer.unobserve(heroSection);
  };
}, []);


  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-lg shadow-md px-6 py-3 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logoSrc} alt="Logo" className="h-10 w-auto transition-all duration-300" />
          <h1 className={`text-xl font-bold transition-colors duration-300 ${textColor}`}>
            Always with Compassion Family Home
          </h1>
        </div>

        <ul className={`flex space-x-6 transition-colors duration-300 ${textColor}`}>
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#features" className="hover:underline">Why Choose Us</a></li>
          <li><a href="#visit" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;


