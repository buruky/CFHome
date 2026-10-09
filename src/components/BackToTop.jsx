import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/outline';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed z-40 h-12 w-12 rounded-full bg-navy-900/90 text-sand-50 shadow-lifted backdrop-blur flex items-center justify-center select-none transition-[opacity,transform,background-color] duration-500 ease-out-expo hover:bg-navy-800 hover:-translate-y-1 active:scale-90 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
        right: 'calc(1.25rem + env(safe-area-inset-right, 0px))',
      }}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
