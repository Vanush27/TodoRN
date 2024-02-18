import {createSlice} from '@reduxjs/toolkit';
import {TFormItem} from 'src/types/store';

const initialState: TFormItem = {
  title: '',
  description: '',
  isImportant: false,
  error: false,
};

const formSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setIsImportant: (state, action) => {
      state.isImportant = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setTitle, setDescription, setIsImportant, setError} =
  formSlice.actions;
export default formSlice.reducer;
