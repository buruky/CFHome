import { useEffect, useState } from 'react';
import logoWhite from '../assets/logo-white.png';
import logoDark from '../assets/logo-black.png';

const NavBar = () => {
  const [textColor, setTextColor] = useState('text-white');
  const [logoSrc, setLogoSrc] = useState(logoWhite);
  const [navOpen, setNavOpen] = useState(false);

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
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <img src={logoSrc} alt="Logo" className="h-10 w-auto transition-all duration-300" />
          <h1 className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${textColor}`}>
            Always with Compassion <br className="hidden sm:inline" /> Family Home
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className={`hidden md:flex space-x-6 text-base transition-colors duration-300 ${textColor}`}>
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#features" className="hover:underline">Why Choose Us</a></li>
          <li><a href="#visit" className="hover:underline">Contact Us</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className={`md:hidden text-2xl font-bold transition-colors duration-300 ${textColor} bg-transparent border-none outline-none`}
          aria-label="Toggle navigation menu"
        >
          {navOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Dropdown (Transparent) */}
      {navOpen && (
        <ul
          className={`md:hidden px-6 pb-4 pt-2 space-y-4 text-lg transition-colors duration-300 ${textColor} bg-transparent`}
        >
          <li><a href="#home" onClick={() => setNavOpen(false)} className="hover:underline">Home</a></li>
          <li><a href="#features" onClick={() => setNavOpen(false)} className="hover:underline">Why Choose Us</a></li>
          <li><a href="#visit" onClick={() => setNavOpen(false)} className="hover:underline">Contact Us</a></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
