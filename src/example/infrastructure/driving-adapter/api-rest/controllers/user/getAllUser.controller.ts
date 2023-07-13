// import { v4 as uuidv4 } from 'uuid'
// import { InMemoryUserRepository } from '../../../../implementation/InMemory/InMemoryUserRepository'
// import { UserCreatorUseCase } from '../../../../../application/use-cases/UserCreator/index'
// import { type User } from 'dominio/entity/User'
import { UserGetterUseCase } from '../../../../../application/use-cases/UserGetter'
import { User } from '../../../../../dominio/entity/User'
import { Request, type NextFunction, Response } from 'express'
import { InMemoryUserRepository } from '../../../../implementation/InMemory/InMemoryUserRepository'
import { InJsonUserRepository } from '../../../../implementation/InJSON/InJsonUserRepository'

// interface iCreateUser {
//   email: string
//   username: string
//   password: string
// }

export const getAllUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // const body: iCreateUser = req.body
  

  const inMemoryUserRepository = new InMemoryUserRepository()
  const inJsonUserRepository = new InJsonUserRepository()
  const userGetterUseCase = new UserGetterUseCase(inJsonUserRepository)

  // const userToCreate: User = {
  //   id: uuidv4(),
  //   email: body.email,
  //   username: body.username,
  //   password: body.password
  // }

  try {
    // const userCreated: User = await userCreatorUseCase.run(userToCreate)
    // res.json(userCreated)
    const getUsers:User []=await userGetterUseCase.run()
    res.json(getUsers)
  } catch (error) {
    next(error)
  }
}
