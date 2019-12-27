import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

import range from './middlewares/range';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [range(0, 5)];

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
