import { useEffect, useRef } from 'react';
import caretaker from '../assets/caretaker.jpg';
import Reveal from './Reveal';

const FeatureCaregiver = () => {
  const imageRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        if (imageRef.current) {
          const { top } = imageRef.current.getBoundingClientRect();
          imageRef.current.style.transform = `translateY(${top * -0.08}px)`;
        }
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 sm:py-28 px-4 overflow-hidden">
      <div className="max-w-content mx-auto relative">
        <div
          className="absolute inset-0 -top-10"
          ref={imageRef}
          style={{
            maskImage: 'radial-gradient(ellipse 70% 65% at center, black 35%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at center, black 35%, transparent 75%)',
          }}
        >
          <img
            src={caretaker}
            alt="Background caregiver silhouette"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-[0.07] grayscale"
          />
        </div>

        <Reveal variant="scale" duration={800}>
          <div className="relative z-10 bg-sand-50/95 backdrop-blur-md border border-navy-900/10 rounded-2xl shadow-lifted p-8 sm:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto md:mx-0 shrink-0 rounded-full overflow-hidden border-4 border-sand-50 shadow-lifted ring-1 ring-navy-900/10">
              <img src={caretaker} alt="Dedicated caregiver" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display text-3xl sm:text-4xl font-semibold mb-4 text-navy-900">
                Dedicated Caregiver Support
              </h3>
              <p className="text-lg text-navy-700/80 leading-relaxed max-w-2xl">
                With one caregiver for every three residents, our home ensures compassionate, individualized attention 24/7. Each caregiver fosters meaningful relationships and emotional trust, providing not just assistance but comfort every day.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FeatureCaregiver;
