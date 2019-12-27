export default (start, limit) => ({ getState }) => next => action => {
  const state = getState();

  return (
    ((action.type === 'INCREMENT' && state < limit) ||
      (action.type === 'DECREMENT' && state > start)) &&
    next(action)
  );
};
