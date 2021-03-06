import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./store/reducer";
const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById('root')
);

