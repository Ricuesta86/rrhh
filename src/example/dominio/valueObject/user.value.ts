import { User } from "../entity/User";

export class UserValue implements User{
    id:string;
    email: string;
    username: string;
    password: string;
    constructor({id,username,email,password}:{id:string,username:string,email:string, password:string}){
        this.id=id;
        this.username=username;
        this.email=email;
        this.password=password
    }

}