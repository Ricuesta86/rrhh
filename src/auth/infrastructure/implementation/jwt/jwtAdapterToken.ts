import { iToken } from "auth/domain/entity/iToken";
import {sign,verify} from 'jsonwebtoken'

export class JWTAdapterToken implements iToken{

    private secret:string

    constructor() {
        this.secret = process.env.JWT_SECRET || 'secret.010101010'
    }

    generate(id: string):string {
        const jwt = sign({id},this.secret,{
            expiresIn: '2h'
        })
        return jwt
    }


    verified (jwt:string):boolean{
        const isCorrect = verify(jwt,this.secret)
        return isCorrect ? true : false
    }
}