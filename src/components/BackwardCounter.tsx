import { useEffect, useState } from 'react';
import { StyledCardDiv } from '@/components/Card';
import { useCounter } from '@/hooks/use-counter';

function BackwardCounter() {
  const counter = useCounter(false);
  console.log('backward counter is re-rendered');

  return <StyledCardDiv>{counter}</StyledCardDiv>;
}

export default BackwardCounter;
