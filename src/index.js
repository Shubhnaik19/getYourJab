import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './Component/Routes';
import { Provider } from 'react-redux'
import configureStore from './store/index'

export const store = configureStore({});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
