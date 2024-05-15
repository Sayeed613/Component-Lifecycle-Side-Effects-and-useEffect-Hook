import React, { useState, useEffect } from 'react';

const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll Tracker</h1>
      <p>Scroll Y Position: {scrollY}px</p>
    </div>
  );
};

export default ScrollTracker;
