import { UserGetterUseCase } from '../../../application/use-cases/UserGetter'
import { UserCreatorUseCase } from '../../../application/use-cases/UserCreator/index'
import { InMemoryUserRepository } from '../../implementation/InMemory/InMemoryUserRepository'
import { type User } from '../../../dominio/entity/User'

(async () => {
  const inMemoryUserRepository = new InMemoryUserRepository()
  const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepository)
  const userToCreate: User = {
    name: 'Roberto',
    age: 36,
    username: 'ricuesta',
    id: '123'
  }
  await userCreatorUseCase.run(userToCreate)
  const userGetterUseCase = new UserGetterUseCase(inMemoryUserRepository)
  const users = await userGetterUseCase.run()
  console.log(users)
})()
