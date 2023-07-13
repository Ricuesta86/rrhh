import { v4 as uuidv4 } from 'uuid'
import { InMemoryUserRepository } from '../../../../implementation/InMemory/InMemoryUserRepository'
import { UserCreatorUseCase } from '../../../../../application/use-cases/UserCreator/index'
import { type User } from '../../../../../dominio/entity/User'
import { Request, type NextFunction, Response } from 'express'
import { UserValue } from '../../../../../dominio/valueObject/user.value';
import { InJsonUserRepository } from '../../../../implementation/InJSON/InJsonUserRepository';

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {username,email,password} = req.body;

  const inMemoryUserRepository = new InMemoryUserRepository()
  const inJsonUserRepository= new InJsonUserRepository()
  const userCreatorUseCase = new UserCreatorUseCase(inJsonUserRepository)

  const userToCreate: User = new UserValue( {
    id:uuidv4(),
    username,
    email,
    password
  })

  try {
    const userCreated: User = await userCreatorUseCase.run(userToCreate)
    res.json(userCreated)
  } catch (error) {
    next(error)
  }
}
