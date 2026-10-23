import { useState } from 'react';
import img1 from '../assets/backyard/backyard(1).webp';
import img2 from '../assets/backyard/backyard(2).webp';
import img3 from '../assets/backyard/backyard(3).webp';
import Lightbox from './Lightbox';
import Reveal from './Reveal';

const images = [img1, img2, img3];
const lightboxImages = images.map((src, i) => ({ src, alt: `Backyard view ${i + 1}` }));

const FeatureBackyard = () => {
  const [index, setIndex] = useState(null);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section className="relative bg-gradient-to-b from-sage-700 to-navy-900 py-20 sm:py-28 px-4">
      <div className="max-w-content mx-auto">
        <Reveal as="div" className="text-center mb-12" duration={800}>
          <h3 className="font-display text-3xl sm:text-4xl font-semibold text-sand-50 mb-4">
            Beautiful Backyard &amp; Patio
          </h3>
          <p className="text-lg text-sand-100/80 leading-relaxed max-w-3xl mx-auto">
            Step outside into serene greenery with a wide patio ideal for reflection, connection, and peaceful outdoor time. Our backyard is a favorite retreat for both residents and visiting family.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {images.map((img, i) => (
            <Reveal key={img} variant="up" delay={i * 90} duration={700}>
              <button
                onClick={() => setIndex(i)}
                className="group relative block w-full h-64 sm:h-72 rounded-xl overflow-hidden shadow-lifted select-none"
                aria-label={`View backyard photo ${i + 1} full screen`}
              >
                <img
                  src={img}
                  alt={`Backyard view ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-110 group-active:scale-105"
                />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/15 transition-colors duration-300" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {index !== null && (
        <Lightbox
          images={lightboxImages}
          index={index}
          onClose={() => setIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
};

export default FeatureBackyard;
