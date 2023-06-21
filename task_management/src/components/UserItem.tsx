import React, { useState } from 'react'
import { HStack, IconButton, ListItem, Text, List, VStack, Box, Input, Button } from '@chakra-ui/react'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { assign, deleteUser, unassign } from '../redux/userSlice'
import { User } from '../redux/types'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { Todo } from '../redux/types'
import TodoItem from './TodoItem'

type Props = {
  user: User
}

export const UserItem: React.FC<Props> = ({ user }) => {
  const [assignTodoIdInput, setAssignTodoIdInput] = useState<number>(0)
  const [unassignTodoIdInput, setUnassignTodoIdInput] = useState<number>(0)
  const dispatch = useDispatch()
  const todos: Todo[] = useSelector((state: RootState) => state.todos.todos)
  const user_todos = user.todoIds.map((id) => todos.find((todo) => todo.id === id)).filter((todo) => todo !== undefined) as Todo[]

  const handleDelete = () => {
    dispatch(deleteUser(user.id))
  }

  const handleChangeAssignTodoIdInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAssignTodoIdInput(Number(event.target.value))
  }

  const handleChangeUnassignTodoIdInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAssignTodoIdInput(Number(event.target.value))
  }

  const handleSubmitAssignTodoId = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(assign({ userId: user.id, todoId: assignTodoIdInput }))
    setAssignTodoIdInput(0)
  }

  const handleSubmitUnassignTodoId = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(unassign({ userId: user.id, todoId: unassignTodoIdInput }))
    setUnassignTodoIdInput(0)
  }

  return <ListItem display="flex" alignItems="center" justifyContent="space-between">
    <VStack>
      <HStack>
        <VStack>
          <form onSubmit={handleSubmitAssignTodoId}>
            <Box display="flex">
              <Input
                type="text"
                value={assignTodoIdInput}
                onChange={handleChangeAssignTodoIdInput}
                mr={2}
              />
              <Button type="submit" leftIcon={<AddIcon />} colorScheme="teal"></Button>
            </Box>
          </form>
          <form onSubmit={handleSubmitUnassignTodoId}>
            <Box display="flex">
              <Input
                type="text"
                value={unassignTodoIdInput}
                onChange={handleChangeUnassignTodoIdInput}
                mr={2}
              />
              <Button type="submit" leftIcon={<DeleteIcon />} colorScheme="teal"></Button>
            </Box>
          </form>
        </VStack>
        <Text>
          {user.text}
        </Text>
        <IconButton
          aria-label="Delete User"
          icon={<DeleteIcon />}
          onClick={handleDelete}
        />
        <List>{user_todos.map((todo) => TodoItem({ todo }))}</List>
      </HStack>
    </VStack>
  </ListItem>
}