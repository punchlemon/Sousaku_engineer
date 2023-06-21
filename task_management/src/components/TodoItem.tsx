import { Checkbox, IconButton, ListItem, Text } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../redux/todoSlice'
import { Todo } from '../redux/types'

type Props = {
  todo: Todo
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <ListItem display="flex" alignItems="center" justifyContent="space-between">
      <Checkbox isChecked={todo.completed} onChange={handleToggle}>
        <Text textDecoration={todo.completed ? 'line-through' : 'none'}>
          {todo.text}
        </Text>
        <Text>
          {todo.id}
        </Text>
      </Checkbox>
      <IconButton
        aria-label="Delete Todo"
        icon={<DeleteIcon />}
        onClick={handleDelete}
      />
    </ListItem>
  )
}

export default TodoItem
