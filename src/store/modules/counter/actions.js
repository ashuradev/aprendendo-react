export const Types = {
  INCREMENT: 'counter/INCREMENT',
  DECREMENT: 'counter/DECREMENT',
  INCREMENT_REQUEST: 'counter/INCREMENT_REQUEST',
  DECREMENT_REQUEST: 'counter/DECREMENT_REQUEST'
};

export const increment = () => ({
  type: Types.INCREMENT
});

export const decrement = () => ({
  type: Types.DECREMENT
});

export const incrementRequest = () => ({
  type: Types.INCREMENT_REQUEST
});

export const decrementRequest = () => ({
  type: Types.DECREMENT_REQUEST
});
