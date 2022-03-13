import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
//import counterReducer from '../features/counter/counterSlice';
import movieReducer from "../features/Movies/movieSlice"
import userSlice from '../features/User/userSlice';
import userReducer from "../features/User/userSlice"

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user:userSlice
  },
});
