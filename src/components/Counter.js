import React from 'react';
import { Container } from 'react-bootstrap';

const Counter = props => {
  const add = (state, setter) => {
    setter(state + 1);
  };
  const sub = (state, setter) => {
    // counterState--
    // if (counterState > 1) {
    // 	setCounterState(counterState - 1);
    // }
    props.counter > 1 && setter(state - 1);
  };
  // const displayBlock = {
  //   display: 'block',
  // };
  // const displayNone = { display: 'none' };
  return (
    <Container className="d-flex justify-content-center align-items-center mt-4">
      <button
        disabled={props.counter > 1 ? false : true}
        // style={
        //   counterState > 1
        //     ? displayBlock
        //     : displayNone
        // }
        onClick={() => sub(props.counter, props.setter)}
      >
        -
      </button>
      <div className="mx-2">{props.counter}</div>
      <button onClick={() => add(props.counter, props.setter)}>+</button>
    </Container>
  );
};

export default Counter;
