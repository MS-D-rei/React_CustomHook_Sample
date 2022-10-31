import { useEffect, useState } from 'react';
import { StyledCardDiv } from '@/components/Card';

function ForwardCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <StyledCardDiv>{counter}</StyledCardDiv>;
}

export default ForwardCounter;
