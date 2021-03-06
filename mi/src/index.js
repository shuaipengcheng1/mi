import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import store from './Store/store'
import { Provider } from 'react-redux'
import './index.css'
import 'antd/dist/antd.css'
// import {persistStore, persistCombineReducers} from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
ReactDOM.render(
  <Provider store={store.store}>
    {/* ζδΉε */}
    <PersistGate persistor={store.persistor}>

      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </PersistGate>

  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
