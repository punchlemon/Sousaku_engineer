import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './types'

type UserState = {
  users: User[]
}

interface assignPayload {
  userId: number,
  todoId: number,
}

type unassignPayload = {
  userId: number,
  todoId: number,
}

const user1: User = {
  id: 0,
  text: 'yano',
  todoIds: [0,]
}

const initialState: UserState = {
  users: [user1],
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      const newUser: User = {
        id: Date.now(),
        text: action.payload,
        todoIds: [],
      }
      state.users.push(newUser)
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
    assign: (state, action: PayloadAction<assignPayload>) => {
      const user = state.users.find(user => user.id === action.payload.userId)
      const todoId = action.payload.todoId
      if (user) {
        user.todoIds.push(todoId)
      }
    },
    unassign: (state, action: PayloadAction<unassignPayload>) => {
      const user = state.users.find(user => user.id === action.payload.userId)
      const deleteTodoId = action.payload.todoId
      if (user) {
        user.todoIds = user.todoIds.filter(todoId => todoId !== deleteTodoId)
      }
    },
  },
})

export const { addUser, deleteUser, assign, unassign } = userSlice.actions


export const userReducer = userSlice.reducer
