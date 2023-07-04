import { Router } from 'express'
import {
  createUserController,
  getAllUserController, 
  updateUserController, deleteUserController
} from '../controllers'

const route = Router()

route.post('', createUserController)
route.put(':id', updateUserController)
route.get('', getAllUserController)
route.delete('/:id', deleteUserController)

export default route
