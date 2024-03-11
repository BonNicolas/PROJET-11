import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './authReducer'; 
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  name: nameReducer,
});

const store = configureStore({
   reducer: rootReducer,
   devTools: process.env.NODE_ENV !== 'production', 
});

export default store;