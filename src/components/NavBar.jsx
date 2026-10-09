import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logoWhite from '../assets/logo-white.png';
import logoDark from '../assets/logo-black.png';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Why Choose Us' },
  { href: '#visit', label: 'Contact Us' },
];

const NavBar = () => {
  const [onHero, setOnHero] = useState(true);
  const [active, setActive] = useState('#home');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);

    const heroObserver = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const hero = document.querySelector('#home');
    if (hero) heroObserver.observe(hero);

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((s) => spyObserver.observe(s));

    return () => {
      heroObserver.disconnect();
      spyObserver.disconnect();
    };
  }, []);

  const textColor = onHero ? 'text-sand-50' : 'text-navy-900';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,box-shadow] duration-500 ease-out-expo ${
        onHero ? 'bg-transparent' : 'bg-sand-50/80 backdrop-blur-lg shadow-soft'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-content mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img
            src={onHero ? logoWhite : logoDark}
            alt="Always with Compassion logo"
            className="h-9 sm:h-10 w-auto transition-opacity duration-300"
          />
          <span className={`font-display text-base sm:text-lg leading-tight font-semibold transition-colors duration-300 ${textColor}`}>
            Always with Compassion
            <span className="hidden sm:block text-xs font-sans font-normal tracking-[0.2em] uppercase opacity-70">
              Family Home
            </span>
          </span>
        </a>

        <ul className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide transition-colors duration-300 ${textColor}`}>
          {LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a href={link.href} className="py-1.5 inline-block">
                {link.label}
              </a>
              <span
                className={`absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left transition-[opacity,transform] duration-300 ease-out-expo ${
                  active === link.href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              />
            </li>
          ))}
          <li>
            <a href="#visit" className={onHero ? 'btn-light !py-2.5 !px-5 text-sm' : 'btn-dark !py-2.5 !px-5 text-sm'}>
              Schedule a Visit
            </a>
          </li>
        </ul>

        <button
          onClick={() => setNavOpen((v) => !v)}
          className={`md:hidden p-1.5 select-none active:scale-90 transition-[color,transform] duration-300 ${textColor}`}
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
        >
          {navOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-drawer ${
          navOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-navy-900/97 backdrop-blur-lg`}
      >
        <ul className="px-6 py-6 space-y-5 text-lg text-sand-50">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setNavOpen(false)} className="hover:text-sage-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
