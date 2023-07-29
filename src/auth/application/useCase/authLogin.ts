import { Auth } from "../../domain/entity/auth";
import { AuthRepository } from "../../domain/repository/authRepository";

export class AuthLogin{
    private readonly _authRepository:AuthRepository

    constructor(authRepository:AuthRepository){
        this._authRepository=authRepository
    }

    async run(authUse:Auth):Promise<Auth>{
        const isCheck = await this._authRepository.login(authUse)
        
        if(!isCheck) throw new Error()

        return isCheck
    }
}