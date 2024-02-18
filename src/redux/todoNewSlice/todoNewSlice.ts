import {createSlice} from '@reduxjs/toolkit';
import {TInputData} from 'src/types/todo';

type TodoState = {
  todoNewList: TInputData[] | [];
  isEditedTodo: boolean;
  currentEditedTodo: any;
};

/**
 * Todos slice initial state
 */
const initialState: TodoState = {
  todoNewList: [],
  isEditedTodo: false,
  currentEditedTodo: {},
};

export const todoNewSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    setTodoList: (state, action) => {
      state.todoNewList = action.payload;
    },

    setIsEditedTodo: (state, action) => {
      state.isEditedTodo = action.payload;
    },

    setCurrentEditedTodo: (state, action) => {
      state.currentEditedTodo = action.payload;
    },
  },
});

export const {setTodoList, setIsEditedTodo, setCurrentEditedTodo} =
  todoNewSlice.actions;
export default todoNewSlice.reducer;
