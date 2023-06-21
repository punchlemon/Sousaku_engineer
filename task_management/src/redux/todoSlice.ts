import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from './types'

interface TodoState {
  todos: Todo[]
}

const todo1: Todo = {
  id: 0,
  text: 'shigoto',
  completed: false,
  userIds: [0,],
}

const initialState: TodoState = {
  todos: [todo1,],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        userIds: [],
      }
      state.todos.push(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
