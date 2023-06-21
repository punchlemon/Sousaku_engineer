import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { List, Box, Button, Heading, Input, VStack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { addTodo } from '../redux/todoSlice'
import TodoItem from './TodoItem'
import { Todo } from '../redux/types'

export const TodoList: React.FC = () => {
  const [inputTodo, setInputTodo] = useState('')
  const dispatch = useDispatch()
  const todos: Todo[] = useSelector((state: RootState) => state.todos.todos)

  const handleChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(event.target.value)
  }

  const handleSubmitTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputTodo.trim() !== '') {
      dispatch(addTodo(inputTodo))
      setInputTodo('')
    }
  }

  return (
    <VStack spacing={4} mt={8}>
      <Heading as="h1" size="lg">
        Todoリスト
      </Heading>
      <form onSubmit={handleSubmitTodo}>
        <Box display="flex">
          <Input
            type="text"
            value={inputTodo}
            onChange={handleChangeTodo}
            mr={2}
          />
          <Button type="submit" leftIcon={<AddIcon />} colorScheme="teal"></Button>
        </Box>
      </form>
      <List>
        {todos.map((todo) => TodoItem({ todo }))}
      </List>
    </VStack>
  )
}