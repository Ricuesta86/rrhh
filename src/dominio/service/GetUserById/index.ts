import { type User } from 'dominio/entity/User'
import { type UserRepository } from 'dominio/repository/UserRepository'

export class GetUserById {
  private readonly _userRepository: UserRepository
  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
  }

  async run (id: string): Promise<User | null> {
    const user = await this._userRepository.getById(id)
    return user !== null ? user : null
  }
}
