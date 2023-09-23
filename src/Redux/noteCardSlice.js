import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotes = createAsyncThunk('note/fetchNoteList', async () => {
  const { data } = await axios.get('https://6507260b3a38daf4803f2b7c.mockapi.io/todo');

  return data;
});

export const fetchNotesCheckedChange = async (id, data) => {
  const itemData = {
    checked: data,
  };
  try {
    const response = await axios.put(
      `https://6507260b3a38daf4803f2b7c.mockapi.io/todo/${id}`,
      itemData,
    );
    console.log('Обновление успешно:', response.data);
  } catch (error) {
    console.error('Ошибка при обновлении:', error);
  }
};

export const fetchPriorityChange = async (id, data) => {
  const itemData = {
    priority: data,
  };
  try {
    const response = await axios.put(
      `https://6507260b3a38daf4803f2b7c.mockapi.io/todo/${id}`,
      itemData,
    );
    console.log('Обновление приоритета успешно:', response.data);
  } catch (error) {
    console.error('Ошибка при обновлении:', error);
  }
};

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

        state.note.sort((a, b) => b.priority - a.priority);

        console.log(state.note);
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
