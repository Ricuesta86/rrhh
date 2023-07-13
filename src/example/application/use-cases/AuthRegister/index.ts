import { type User } from '../../../dominio/entity/User'
import { type UserRepository } from '../../../dominio/repository/UserRepository'
import { ExistUserByUserName } from '../../../dominio/service/ExistUserByUserName'
import { UserAlreadyExistsException } from '../../../dominio/exception/UserAlreadyExistsException'
import { UserNameUndefinedException } from '../../../dominio/exception/UserNameUndefined'

export class AuthRegisterUseCase {
  private readonly _userRepository: UserRepository
  private readonly _existUserByUserName: ExistUserByUserName

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    this._existUserByUserName = new ExistUserByUserName(userRepository)
  }

  async run (body: User): Promise<User> {
    if (body.username === undefined) throw new UserNameUndefinedException()
    const existUser: boolean = await this._existUserByUserName.run(body.username)

    if (existUser) throw new UserAlreadyExistsException()

    const userRegister: User = await this._userRepository.save(body)
    return userRegister
  }
}
