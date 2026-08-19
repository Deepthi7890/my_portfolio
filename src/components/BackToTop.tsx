import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="back-to-top-btn"
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-purple-200 border border-purple-500/40 shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer"
    >
      <ArrowUp className="w-4 h-4 text-purple-300" />
    </button>
  );
};
