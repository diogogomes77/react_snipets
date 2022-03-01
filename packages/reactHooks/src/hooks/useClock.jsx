import { useEffect, useState } from 'react';

const useClock = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedSeconds((currentSeconds) => currentSeconds + 1);
      // setState can use actual state as argument to a local function
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return `${Math.floor((elapsedSeconds / 60) % 60)
    .toFixed(0)
    .padStart(2, '0')}:${(elapsedSeconds % 60).toFixed(0).padStart(2, '0')}`;
};

export default useClock;
