import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './noteCardSlice';

export const store = configureStore({
  reducer: {
    cardSlice,
  },
});
