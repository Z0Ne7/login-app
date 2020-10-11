import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import appReducers from './reducers';
import rootSaga from './saga';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
  process.env.NODE_ENV === 'development' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, sagaMiddleware));
const store = createStore(appReducers, enhancer);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
