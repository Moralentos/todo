import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  note: [],
};

export const noteCardSlice = createSlice({
  name: 'cardSlice',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const obj = action.payload;
      state.note.push(...obj);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addNote } = noteCardSlice.actions;

export default noteCardSlice.reducer;
