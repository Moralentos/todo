import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './NoteCardSlice';
import taskSlice from './EditTaskSlice';

export const store = configureStore({
  reducer: {
    cardSlice,
    taskSlice,
  },
});
