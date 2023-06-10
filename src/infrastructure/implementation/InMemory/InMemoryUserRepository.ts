import { type User } from 'dominio/entity/User'
import { type UserRepository } from 'dominio/repository/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  private readonly userData: User[] = []
  async getAll (): Promise<User[]> {
    return this.userData
  }

  async save (user: User): Promise<User> {
    this.userData.push(user)
    return user
  }

  async getByUsername (username: string): Promise<User | null> {
    const userFound = this.userData.find(x => x.username === username)
    return userFound === undefined ? null : userFound
  }

  async update (user: User): Promise<User> {
    return user
  }

  async delete (user: User): Promise<void> {

  }

  async getById (id: string): Promise<User | null> {
    return null
  }
}
