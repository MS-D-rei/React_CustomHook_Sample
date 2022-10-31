import { useEffect, useState } from 'react';
import { StyledCardDiv } from '@/components/Card';

function BackwardCounter() {
  const [counter, setCounter] = useState(0);

  console.log('backward counter is re-rendered');

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <StyledCardDiv>{counter}</StyledCardDiv>;
}

export default BackwardCounter;
