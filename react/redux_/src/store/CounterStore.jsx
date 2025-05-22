import { applyMiddleware, createStore } from 'redux';
import CounterReducer from '../reducers/CounterReducer';
import {thunk} from 'redux-thunk';
const store=createStore(CounterReducer, applyMiddleware(thunk));
export default store;

//npm install @reduxjs/toolkit
//instead of using createStore we can use configureStore from redux toolkit
// import { configureStore } from '@reduxjs/toolkit';
// import CounterReducer from '../reducers/CounterReducer';
// const store=configureStore({
//     reducer:CounterReducer
// });