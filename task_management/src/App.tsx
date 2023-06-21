import React from 'react'
import { Container } from '@chakra-ui/react'
import { TodoList } from './components/TodoList'
import { UserList } from './components/UserList'

export const App: React.FC = () => {
  return (
    <Container maxW="sm">
      <TodoList />
      <UserList />
    </Container>
  )
}
