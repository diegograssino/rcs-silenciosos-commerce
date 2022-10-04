import React from 'react';
import Hero from './Hero';

const Landing = ({
  prop,
  roberto,
  numero,
  funcion,
}) => {
  return (
    <div>
      <Hero />
      <h2>{prop}</h2>
      <h2>{roberto}</h2>
      <h2>{numero}</h2>
      <button onClick={() => funcion()}>
        Callback
      </button>
    </div>
  );
};

export default Landing;
