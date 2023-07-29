import { Auth } from "auth/domain/entity/auth";
import { AuthRepository } from "../../../domain/repository/authRepository";
import * as fs from 'fs';

export class InJsonAdapterAuthRepository implements AuthRepository{

    private usersData:Auth[]
    private url_dir:string

    constructor(){
        this.url_dir = process.env.URL_DIR || '/home/ricuesta/Dev/repo-rhu/backend/src/empleado/infrastructure/implementation/inJSON/data.json'
        const data =require(this.url_dir)
        this.usersData=data.users
    }

    async login (authUser: Auth) : Promise<Auth | null>{
      const userByEmail = await this.usersData.find(user=>user.email===authUser.email)
      return !userByEmail ? null : userByEmail
    }
    
    async register (authUser: Auth): Promise<Auth>{
        this.usersData.push(authUser)
        this.saveJSON()
        return authUser
    };

    saveJSON():void {
        let users={users:this.usersData}
        let JsonDataString=JSON.stringify(users)
        fs.writeFileSync(
          this.url_dir,
          JsonDataString
        );
      }

}