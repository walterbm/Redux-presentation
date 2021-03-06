import { createStore } from 'redux';

import { AppReducer } from './rootReducer'

export const store = createStore(AppReducer, window.devToolsExtension && window.devToolsExtension());

// ~~~ home-made `createStore` ~~~
//
// const createStore = (reducer) => {
//   let state;
//   let listeners = [];
//
//   const getState = () => state;
//
//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };
//
//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     };
//   };
//
//   dispatch({});
//
//   return { getState, dispatch, subscribe };
// };
