import { type User } from '../../../dominio/entity/User'
import { type UserRepository } from '../../../dominio/repository/UserRepository'
import data from '../../../data.json'
import * as fs from 'fs';

export class InJsonUserRepository implements UserRepository {
  
  private userData: User[]

  constructor(){
    this.userData=data.users
  }
  async getAll (): Promise<User[]> {
    return this.userData
  }

  async save (user: User): Promise<User> {
    this.userData.push(user)
    this.saveJSON()
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
    this.saveJSON()
    return user
  }

  async delete (user: User): Promise<void> {
    const users = this.userData.filter(x => x.id !== user.id)
    this.userData = users
    this.saveJSON()
  }

  async getById (id: string): Promise<User | null> {
    const userFound = this.userData.find(x => x.id === id)
    return userFound === undefined ? null : userFound
  }

  saveJSON():void {
    let users={users:this.userData}
    let JsonDataString=JSON.stringify(users)
    fs.writeFileSync('./src/data.json', JsonDataString);
  }
}
