import { IEncrypt } from "../../../domain/entity/iEncrypt";
import { hash, compare } from 'bcryptjs'

export class BcryptAdapterEncrypt implements IEncrypt{

     async encrypt (pass:string):Promise<string>{ 
        const passHash = await hash(pass,8)
        return passHash;
    };


    async verified ():Promise<any>{

    }
    
}