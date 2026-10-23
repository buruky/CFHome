import bgImg from '../assets/main-background.webp';
import logo from '../assets/logo-white.png';
import Reveal from './Reveal';
import { ChevronDownIcon } from '@heroicons/react/outline';

const Hero = () => {
  return (
    <div
      id="home"
      className="relative w-full h-[100svh] min-h-[560px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Layered scrim: darkest at the edges where text sits, clear over the center of the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/35 to-navy-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/20" />

      <div className="relative h-full flex items-center">
        <div className="max-w-content w-full mx-auto px-4 sm:px-6">
          <div className="max-w-xl text-center md:text-left">
            <Reveal delay={0} duration={800}>
              <img src={logo} alt="Logo" className="h-16 sm:h-20 w-auto mx-auto md:mx-0 drop-shadow-lg mb-6" />
            </Reveal>

            <Reveal delay={120} duration={800}>
              <p className="font-display italic text-xl sm:text-2xl text-sand-100/90 mb-2">
                Exceptional Senior Care
              </p>
            </Reveal>

            <Reveal delay={220} duration={900}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-sand-50 leading-[1.05] mb-5">
                Always with Compassion
              </h1>
            </Reveal>

            <Reveal delay={340} duration={900}>
              <p className="text-lg sm:text-xl text-sand-100/85 max-w-md mx-auto md:mx-0 mb-9">
                Comfort, dignity, and expert care for your loved ones.
              </p>
            </Reveal>

            <Reveal delay={460} duration={900}>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                <a href="#visit" className="btn-light w-full sm:w-auto">
                  Schedule a Visit
                </a>
                <a href="#features" className="btn-ghost w-full sm:w-auto">
                  Explore Our Home
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <a
        href="#features"
        aria-label="Scroll to learn more"
        className="hidden sm:flex absolute bottom-7 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-sand-100/70 hover:text-sand-50 transition-colors animate-fade-in"
        style={{ animationDelay: '1200ms' }}
      >
        <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDownIcon className="h-5 w-5 animate-drift" />
      </a>
    </div>
  );
};

export default Hero;
