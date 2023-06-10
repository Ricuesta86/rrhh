import { type User } from 'dominio/entity/User'
import { type UserRepository } from '../../../dominio/repository/UserRepository'
import { ExistUserByUserName } from '../../../dominio/service/ExistUserByUserName'
import { UserAlreadyExistsException } from '../../../dominio/exception/UserAlreadyExistsException'

export class UserCreatorUseCase {
  private readonly _userRepository: UserRepository
  private readonly _existUserByUserName: ExistUserByUserName

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    this._existUserByUserName = new ExistUserByUserName(userRepository)
  }

  async run (body: User): Promise<User> {
    const existUser: boolean = await this._existUserByUserName.run(body.username)

    if (existUser) throw new UserAlreadyExistsException()

    const userCreated: User = await this._userRepository.save(body)
    return userCreated
  }
}
