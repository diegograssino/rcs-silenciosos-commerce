import React, { useState } from 'react';
import Counter from './Counter';
import Hero from './Hero';

const Landing = () => {
  const [counterState, setCounterState] =
    useState(1);

  return (
    <div>
      <Hero />
      <Counter
        counter={counterState}
        setter={setCounterState}
      />
    </div>
  );
};

export default Landing;
