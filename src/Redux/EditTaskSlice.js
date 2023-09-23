import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotesEdit = async (id, data) => {
  try {
    const response = await axios.put(
      `https://6507260b3a38daf4803f2b7c.mockapi.io/todo/${id}`,
      data,
    );
    console.log('Обновление успешно:', response.data);
  } catch (error) {
    console.error('Ошибка при обновлении:', error);
  }
};

export const initialState = {
  task: [],
  edit: false,
  openAddTask: false,
  inputTitle: '',
  inputDesc: '',
  dateEdit: false,
  noteCategoryEdit: false,
};

export const editTask = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    setEditTask: (state, action) => {
      state.task = action.payload;
    },
    setEditToggle: (state, action) => {
      state.edit = !state.edit;
    },
    setOpenAddTask: (state, action) => {
      state.openAddTask = !state.openAddTask;
    },
    setInputTitle: (state, action) => {
      state.inputTitle = action.payload;
    },
    setDescTitle: (state, action) => {
      state.inputDesc = action.payload;
    },
    setDateEdit: (state, action) => {
      state.dateEdit = action.payload;
    },
    setNoteCategoryEdit: (state, action) => {
      state.noteCategoryEdit = action.payload;
    },
  },
});
// pizzaCategory, sort, currentPage
export const {
  setEditTask,
  setEditToggle,
  setOpenAddTask,
  setInputTitle,
  setDescTitle,
  setDateEdit,
  setNoteCategoryEdit,
} = editTask.actions;

export default editTask.reducer;
