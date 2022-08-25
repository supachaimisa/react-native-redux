import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userreducer';
import darkModeReducer from '../features/darkmodereducer';

export default configureStore({
  reducer: {
    userReducer: userReducer,
    darkModeReducer: darkModeReducer,
  },
});