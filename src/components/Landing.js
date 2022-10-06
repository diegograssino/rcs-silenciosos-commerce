import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Hero from './Hero';

const Landing = () => {
  const [counterState, setCounterState] =
    useState(1);

  const add = () => {
    setCounterState(counterState + 1);
  };
  const sub = () => {
    setCounterState(counterState - 1);
  };

  return (
    <div>
      <Hero />
      <Container className="d-flex justify-content-center align-items-center mt-4">
        <button onClick={() => sub()}>-</button>
        <div className="mx-2">{counterState}</div>
        <button onClick={() => add()}>+</button>
      </Container>
    </div>
  );
};

export default Landing;
