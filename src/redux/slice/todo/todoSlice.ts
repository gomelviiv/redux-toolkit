
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import toDoInitialState from './__constants__';

const todoSlice = createSlice({
  name: 'todos',
  initialState: toDoInitialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    toggleComplete(state, action: PayloadAction<string>) {
        const toggledTodo = state.list.find(el => el.id === action.payload)
        toggledTodo.completed = !toggledTodo.completed
    },
    removeTodo(state, action: PayloadAction<string>){
      console.log("action.payload",action.payload)
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
  },
});

export const {addTodo, toggleComplete,removeTodo} = todoSlice.actions

export default todoSlice.reducer