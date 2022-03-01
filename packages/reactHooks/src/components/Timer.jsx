import useClock from 'hooks/useClock';
import React from 'react';

function Timer() {
  const elapsedTime = useClock();

  return <div>{elapsedTime}</div>;
}

export default Timer;
