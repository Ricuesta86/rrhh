import { type User } from '../../../dominio/entity/User'
import { type UserRepository } from '../../../dominio/repository/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  private userData: User[] = []
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
    const users = this.userData.filter(x => x.id !== user.id)
    users.push(user)
    this.userData = users
    return user
  }

  async delete (user: User): Promise<void> {
    const users = this.userData.filter(x => x.id !== user.id)
    this.userData = users
  }

  async getById (id: string): Promise<User | null> {
    const userFound = this.userData.find(x => x.id === id)
    return userFound === undefined ? null : userFound
  }
}
