import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";

import reducer from '../reducers';

const configureStore = () => {
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares)) // history가 쌓이면 메모리도 많이 쌓이고 데이터가 보이기 때문에 보안도 취약해짐
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_Env === 'development'
});

export default wrapper;