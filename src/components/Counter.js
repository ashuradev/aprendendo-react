import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../store/actions/counter';

const Counter = ({ 
  counter, 
  increment, 
  decrement 
}) => (
  <>
    <h1>Contador: {counter}</h1>
    <button onClick={increment}>
      Incrementar
    </button>
    <button onClick={decrement}>
      Decrementar
    </button>
  </>
);

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter);