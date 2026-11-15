
'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    
      <button
  onClick={scrollToTop}
  aria-label="Move to top"
  title="Move to top"
  className={`
    fixed bottom-6 left-1/2 -translate-x-1/2 z-50
    rounded-full bg-neutral-950 text-white
    px-6 py-3
    font-mono text-xs font-semibold tracking-widest
    shadow-lg transition-all duration-300
    hover:bg-neutral-700 hover:-translate-y-1
    focus:outline-none focus:ring-2 focus:ring-neutral-500
    ${
      isVisible
        ? 'translate-y-0 opacity-100'
        : 'pointer-events-none translate-y-5 opacity-0'
    }
  `}
>
  MOVE TO TOP
</button>
  );
}
