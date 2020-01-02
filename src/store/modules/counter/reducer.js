import { Types } from './actions';

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.INCREMENT:
      return state + 1;

    case Types.DECREMENT:
      return state - 1;

    default:
      return state;
  }
};
