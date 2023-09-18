import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotes = createAsyncThunk('note/fetchNoteList', async () => {
  const { data } = await axios.get('https://6507260b3a38daf4803f2b7c.mockapi.io/todo');

  return data;
});

const initialState = {
  note: [],
  status: false,
};

// addNote: (state, action) => {
//   const obj = action.payload;
//   if (obj.length !== state.note.length) {
//     state.note = obj;
//   }
// },

export const noteCardSlice = createSlice({
  name: 'cardSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state, action) => {
        console.log('отправка');
        state.status = true;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        console.log('ОК');
        state.note = action.payload;
        state.status = false;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        console.log('ERROR');
      });
    //... more extraReducers ...
  },
});

// Action creators are generated for each case reducer function
// export const { addNote } = noteCardSlice.actions;

export default noteCardSlice.reducer;
