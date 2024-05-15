import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default Timer;
