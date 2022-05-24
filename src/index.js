import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/App';
import reducers from './main/reducers' 

import reportWebVitals from './reportWebVitals';

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('app'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
