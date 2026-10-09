import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Lightbox from './Lightbox';
import useSwipe from '../hooks/useSwipe';

// Inline gallery used by the suites and living-space sections: large image,
// chevron controls, a thumbnail filmstrip instead of plain dots, keyboard
// arrows when focused, swipe on touch, and a shared fullscreen lightbox.
const Carousel = ({ images, altPrefix, heightClass = 'h-[28rem]', roundedClass = 'rounded-2xl', onDark = false }) => {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const prev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
  const swipeHandlers = useSwipe(next, prev);

  const lightboxImages = images.map((src, i) => ({ src, alt: `${altPrefix} ${i + 1}` }));

  return (
    <div
      className="relative max-w-5xl mx-auto focus:outline-none"
      tabIndex={0}
      role="group"
      aria-label={`${altPrefix} gallery`}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
      }}
    >
      <div className={`relative overflow-hidden touch-pan-y ${roundedClass} shadow-lifted`} {...swipeHandlers}>
        <img
          src={images[current]}
          alt={`${altPrefix} ${current + 1}`}
          onClick={() => setFullscreen(true)}
          loading="lazy"
          decoding="async"
          className={`cursor-zoom-in w-full ${heightClass} object-cover object-center transition-opacity duration-500 ease-out-expo`}
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-navy-950/10 rounded-[inherit]" />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 bg-sand-50/90 hover:bg-sand-50 text-navy-900 rounded-full p-3 shadow-soft backdrop-blur transition-[background-color,transform] duration-200 ease-out-expo hover:scale-105 active:scale-95 select-none"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 bg-sand-50/90 hover:bg-sand-50 text-navy-900 rounded-full p-3 shadow-soft backdrop-blur transition-[background-color,transform] duration-200 ease-out-expo hover:scale-105 active:scale-95 select-none"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto px-1 py-1">
          {images.map((src, index) => (
            <button
              key={src}
              onClick={() => setCurrent(index)}
              aria-label={`View ${altPrefix.toLowerCase()} ${index + 1}`}
              aria-current={index === current}
              className={`relative shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-md overflow-hidden transition-[opacity,transform,box-shadow] duration-300 ease-out-expo select-none active:scale-95 ${
                index === current
                  ? `ring-2 ring-sage-500 ring-offset-2 ${onDark ? 'ring-offset-navy-900' : 'ring-offset-sand-50'} scale-105`
                  : 'opacity-50 hover:opacity-90'
              }`}
            >
              <img src={src} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {fullscreen && (
        <Lightbox
          images={lightboxImages}
          index={current}
          onClose={() => setFullscreen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
};

export default Carousel;
