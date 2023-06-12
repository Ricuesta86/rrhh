import { UserGetterUseCase } from '../../../application/use-cases/UserGetter'
import { UserCreatorUseCase } from '../../../application/use-cases/UserCreator'
import { InMemoryUserRepository } from '../../implementation/InMemory/InMemoryUserRepository'
import { type User } from '../../../dominio/entity/User'
import { UserUpdaterUseCase } from '../../../application/use-cases/UserUpdater/index'
import { UserDeleterUseCase } from '../../../application/use-cases/UserDeleter/index';

(async () => {
  const inMemoryUserRepository = new InMemoryUserRepository()
  const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepository)
  const userToCreate: User = {
    email: 'ricuesta1986@gmail.com',
    password: 'Rroan.2017',
    username: 'ricuesta',
    id: '123'
  }
  await userCreatorUseCase.run(userToCreate)
  const userGetterUseCase = new UserGetterUseCase(inMemoryUserRepository)
  const users = await userGetterUseCase.run()
  console.log(users)

  const userUpdaterUseCase = new UserUpdaterUseCase(inMemoryUserRepository)
  const userToUpdate: User = {
    id: '123',
    email: 'roberto.iglesias@cfg.giat.cu',
    username: 'roberto.iglesias',
    password: 'Rroan*2017'
  }
  await userUpdaterUseCase.run(userToUpdate)
  const userGetterUseCase1 = new UserGetterUseCase(inMemoryUserRepository)
  const users1 = await userGetterUseCase1.run()
  console.log(users1)

  const userDeleterUseCase = new UserDeleterUseCase(inMemoryUserRepository)
  await userDeleterUseCase.run({ id: '123' })
  const userGetterUseCase2 = new UserGetterUseCase(inMemoryUserRepository)
  const users2 = await userGetterUseCase2.run()
  console.log(users2)
})()
