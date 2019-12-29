import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './ducks';

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
