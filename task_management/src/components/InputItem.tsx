import { AddIcon } from "@chakra-ui/icons"
import { Box, Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"


type Props = {
  input: string | number

}

// export const InputItem: React.FC<Props> = ({ prop }) => {
//   const [inputTodoId, setInputUser] = useState<number>(0)
//   const dispatch = useDispatch()

//   const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputUser(Number(event.target.value))
//   }

//   const handleSubmitUser = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     dispatch(assign({ userId: user.id, todoId: inputTodoId }))
//     setInputUser(0)
//   }
//   return (
//     <form onSubmit={handleSubmitUser}>
//       <Box display="flex">
//         <Input
//           type="text"
//           value={inputTodoId}
//           onChange={handleChangeUser}
//           mr={2}
//         />
//         <Button type="submit" leftIcon={<AddIcon />} colorScheme="teal"></Button>
//       </Box>
//     </form>
//   )
// }
