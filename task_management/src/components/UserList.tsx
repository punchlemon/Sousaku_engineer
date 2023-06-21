import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { List, Box, Button, Heading, Input, VStack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { addUser } from '../redux/userSlice'
import { UserItem } from './UserItem'
import { User } from '../redux/types'

export const UserList: React.FC = () => {
  const [inputUser, setInputUser] = useState('')
  const dispatch = useDispatch()

  const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUser(event.target.value)
  }

  const handleSubmitUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputUser.trim() !== '') {
      dispatch(addUser(inputUser))
      setInputUser('')
    }
  }
  const users: User[] = useSelector((state: RootState) => state.users.users)

  return (
    <VStack spacing={4} mt={8}>
      <Heading as="h1" size="lg">
        Userリスト
      </Heading>
      <form onSubmit={handleSubmitUser}>
        <Box display="flex">
          <Input
            type="text"
            value={inputUser}
            onChange={handleChangeUser}
            mr={2}
          />
          <Button type="submit" leftIcon={<AddIcon />} colorScheme="teal"></Button>
        </Box>
      </form>
      <List>
        {users.map((user) => UserItem({ user }))}
      </List>
      {/* <UserItem user={users[0]} /> */}
    </VStack>
  )
}