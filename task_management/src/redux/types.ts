export type Todo = {
  id: number
  text: string
  completed: boolean
  userIds: number[]
}

export type User = {
  id: number
  text: string
  todoIds: number[]
}

export type Option = 'Todo' | 'User'