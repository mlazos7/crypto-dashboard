import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import { Provider } from 'react-redux'
import generateStore from './redux/store'

let store = generateStore()

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,
  document.getElementById('root')
);

