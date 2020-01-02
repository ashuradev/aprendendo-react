import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  incrementRequest,
  decrementRequest
} from '../store/modules/counter/actions';

const Counter = () => {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Contador: {counter}</h1>

      <button id="increment" onClick={() => dispatch(incrementRequest())}>
        Incrementar
      </button>
      <button id="decrement" onClick={() => dispatch(decrementRequest())}>
        Decrementar
      </button>
    </>
  );
};

export default Counter;
