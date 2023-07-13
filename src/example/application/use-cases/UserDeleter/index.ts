import { type User } from '../../../dominio/entity/User'
import { type UserRepository } from '../../../dominio/repository/UserRepository'
import { GetUserById } from '../../../dominio/service/GetUserById'
import { UserNotFoundException } from '../../../dominio/exception/UserNotFound'

export class UserDeleterUseCase {
  private readonly _userRepository: UserRepository
  private readonly _getUserById: GetUserById

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    this._getUserById = new GetUserById(userRepository)
  }

  async run (id: string): Promise<void> {
    const FoundUser: User | null = await this._getUserById.run(id)

    if (FoundUser === null) throw new UserNotFoundException()

    await this._userRepository.delete(FoundUser)
  }
}
