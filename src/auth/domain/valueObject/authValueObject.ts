import { Auth } from "../entity/auth";

export class AuthValueObject implements Auth{
    email:string
    password:string

    constructor(email:string, password:string){
        this.email=email
        this.password=password
    }
}