import React, { useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline';
import useSwipe from '../hooks/useSwipe';

// Fullscreen viewer shared by every gallery on the page: keyboard (Esc/←/→),
// swipe, a position counter, and click-outside-to-close.
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, onPrev, onNext]);

  const swipeHandlers = useSwipe(onNext, onPrev);
  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/92 backdrop-blur-sm animate-fade-in touch-pan-y"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      {...swipeHandlers}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute text-sand-100/80 hover:text-sand-50 active:scale-90 select-none transition-[color,transform] duration-200 p-2 z-10"
        style={{ top: 'calc(1.1rem + env(safe-area-inset-top, 0px))', right: 'calc(1.1rem + env(safe-area-inset-right, 0px))' }}
      >
        <XIcon className="h-7 w-7" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous image"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-sand-100/70 hover:text-sand-50 hover:bg-sand-50/10 active:scale-90 select-none rounded-full p-2 sm:p-3 transition-[color,background-color,transform] duration-200 z-10"
          >
            <ChevronLeftIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next image"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-sand-100/70 hover:text-sand-50 hover:bg-sand-50/10 active:scale-90 select-none rounded-full p-2 sm:p-3 transition-[color,background-color,transform] duration-200 z-10"
          >
            <ChevronRightIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>
        </>
      )}

      <img
        key={image.src}
        src={image.src}
        alt={image.alt}
        decoding="async"
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-sm shadow-lifted animate-scale-in"
      />

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sand-100/70 text-sm font-medium tracking-wide tabular-nums">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default Lightbox;
