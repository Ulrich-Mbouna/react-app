import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider} from "react-redux";
import {createStore} from "redux";
import Counter from "./Counter";
//Debut de redux

//Our reducer

const initialState = {
    count:0
}
function reducer(state = initialState,action) {
    switch (action.type) {
        case 'INCREMENT':{
            return { count: state.count + action.num }
        }
        default:{
            return state
        }
    }
}

const store = createStore(reducer);

const el = <Provider store={store}>
    <Counter />
</Provider>
ReactDOM.render(
  el,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
