import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      name: "Bread",
      isComplete: false,
    },
    {
      id: 2,
      name: "Egg",
      isComplete: false,
    },
    {
      id: 3,
      name: "Milk",
      isComplete: true,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        name: action.payload.name,
        isComplete: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, { payload }) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      state[index].isComplete = !state[index].isComplete;
    },
    deleteTodo: (state, { payload }) => {
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addTodo, toggleComplete , deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
