import useReveal from '../hooks/useReveal';

const HIDDEN_TRANSFORMS = {
  up: 'translateY(18px)',
  'up-lg': 'translateY(44px)',
  scale: 'scale(0.96)',
  in: 'none',
};

// Shared scroll-reveal primitive so every section enters on its own terms
// (distance/delay/variant) instead of one identical fade stamped everywhere.
const Reveal = ({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  duration = 700,
  className = '',
  children,
  ...rest
}) => {
  const [ref, visible] = useReveal();
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] ease-out-expo ${className}`}
      style={{
        transitionDuration: `${reduceMotion ? Math.min(duration, 300) : duration}ms`,
        transitionDelay: visible ? `${delay}ms` : '0ms',
        opacity: visible ? 1 : 0,
        transform: visible || reduceMotion ? 'none' : HIDDEN_TRANSFORMS[variant],
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
