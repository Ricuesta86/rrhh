import { Auth } from "../../domain/entity/auth";
import { AuthRepository } from "../../domain/repository/authRepository";

export class AuthRegister{
    private readonly _authRepository:AuthRepository

    constructor(authRepository:AuthRepository){
        this._authRepository=authRepository
    }

    async run(authUse:Auth):Promise<Auth>{
        return this._authRepository.register(authUse)
    }
}