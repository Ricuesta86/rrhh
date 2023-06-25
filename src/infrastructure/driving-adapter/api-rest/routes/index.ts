

import { type NextFunction, Router, type Request, type Response } from 'express'
import userRoutes from './user.routes'
import { UserAlreadyExistsException } from '../../../../dominio/exception/UserAlreadyExistsException'
import { UserNotFoundException } from '../../../../dominio/exception/UserNotFound'


const route = Router()

route.use('/users', userRoutes)

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof UserAlreadyExistsException) {
    res.status(400).json({
      message: 'El usuario ya ha sido registrado'
    })
  } else if (err instanceof UserNotFoundException) {
    res.status(400).json({
      message: 'El usuario no existe'
    })
  } else {
    next(err)
  }
})

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  res.status(500)
  res.json({
    error: err
  })
})

export default route
