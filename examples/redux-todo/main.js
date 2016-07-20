import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // exposes Store to all components through context

import { App } from './components/presentation/App.js';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
