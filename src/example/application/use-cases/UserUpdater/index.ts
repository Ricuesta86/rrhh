import { type User } from '../../../dominio/entity/User'
import { type UserRepository } from '../../../dominio/repository/UserRepository'
import { GetUserById } from '../../../dominio/service/GetUserById'
import { UserNotFoundException } from '../../../dominio/exception/UserNotFound'

export class UserUpdaterUseCase {
  private readonly _userRepository: UserRepository
  private readonly _getUserById: GetUserById

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    this._getUserById = new GetUserById(userRepository)
  }

  async run (body: User): Promise<User> {
    const FoundUser: User | null = await this._getUserById.run(body.id)

    if (FoundUser === null) throw new UserNotFoundException()

    const userUpdate: User = {
      id: FoundUser.id,
      email: body.email ?? FoundUser.email,
      username: body.username ?? FoundUser.username,
      password: body.password ?? FoundUser.password
    }

    const userUpdated: User = await this._userRepository.update(userUpdate)
    return userUpdated
  }
}
