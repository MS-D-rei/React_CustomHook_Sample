import { useEffect, useState } from 'react';
import { StyledCardDiv } from '@/components/Card';
import { useCounter } from '@/hooks/use-counter';

function ForwardCounter() {
  const counter = useCounter(true);
  console.log('forward counter is re-rendered');

  return <StyledCardDiv>{counter}</StyledCardDiv>;
}

export default ForwardCounter;
