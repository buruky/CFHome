import { useEffect, useState } from 'react';
import logoWhite from '../assets/logo-white.png';
import logoDark from '../assets/logo-black.png';

const NavBar = () => {
  const [textColor, setTextColor] = useState('text-white');
  const [logoSrc, setLogoSrc] = useState(logoWhite);

  useEffect(() => {
    const heroSection = document.querySelector('#home');
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
      { root: null, threshold: 0.1 }
    );

    if (heroSection) observer.observe(heroSection);
    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-lg shadow-md px-4 py-3 z-50">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-y-2">
        {/* Logo and Site Name */}
        <div className="flex flex-wrap items-center space-x-3 max-w-full">
          <img src={logoSrc} alt="Logo" className="h-10 w-auto transition-all duration-300" />
          <h1 className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${textColor}`}>
            Always with Compassion <br className="hidden sm:inline" /> Family Home
          </h1>
        </div>

        {/* Navigation */}
        <ul className={`flex flex-wrap justify-end space-x-6 text-base transition-colors duration-300 ${textColor}`}>
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#features" className="hover:underline">Why Choose Us</a></li>
          <li><a href="#visit" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;



