import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import appReducers from '../reducers';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  process.env.NODE_ENV !== 'production' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = () => {
  const middlewares = [thunk, sagaMiddleware];
  const enhancer = [applyMiddleware(...middlewares)];
  const store = createStore(appReducers, composeEnhancers(...enhancer));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
