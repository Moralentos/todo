import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './NoteCardSlice';

export const store = configureStore({
  reducer: {
    cardSlice,
  },
});
