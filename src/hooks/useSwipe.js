import { useRef } from 'react';

// Lightweight horizontal swipe detector for touch devices.
export default function useSwipe(onSwipeLeft, onSwipeRight, threshold = 50) {
  const startX = useRef(null);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (delta > threshold) onSwipeRight?.();
    else if (delta < -threshold) onSwipeLeft?.();
    startX.current = null;
  };

  return { onTouchStart, onTouchEnd };
}
