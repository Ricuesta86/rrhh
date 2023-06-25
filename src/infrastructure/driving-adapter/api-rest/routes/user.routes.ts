import { Router } from 'express'
import {
  createUserController,
  getAllUserController, 
  // updateUserController, deleteUserController
} from '../controllers'

const route = Router()

route.post('', createUserController)
// route.put('', updateUserController)
route.get('', getAllUserController)
// route.delete('', deleteUserController)

export default route
