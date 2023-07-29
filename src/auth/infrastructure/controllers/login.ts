import { NextFunction, Request, Response } from "express";
import { InJsonAdapterAuthRepository } from "../implementation/inJSON/inJsonAdapterAuthRepository";
import { AuthLoginUseCase } from "../../application/useCase";
import { BcryptAdapterEncrypt } from '../implementation/bcrypt/bcryptAdapterEncrypt';
import { JWTAdapterToken } from '../implementation/jwt/jwtAdapterToken';

export const login = async (req:Request, res:Response, next:NextFunction)=>{

    const {auth}=req.body;


    const inJsonAdapterAuthRepository=new InJsonAdapterAuthRepository()
    const authLoginUseCase= new  AuthLoginUseCase(inJsonAdapterAuthRepository);
    const bcryptAdapterEncrypt = new BcryptAdapterEncrypt()
    const jwtAdapterToken = new JWTAdapterToken()
    



    try {
        const authLogin = await authLoginUseCase.run(auth)
        const passHash =authLogin.password
        const isCorrect = await bcryptAdapterEncrypt.verified(auth.password,passHash)
        if(isCorrect){
            const token = jwtAdapterToken.generate(auth.email)
            res.status(200).json({
                msg:'El user fue logeado correctamente',data: {auth,token}
            })
        }
        else
            res.status(403).json({
                msg:'Contraceña incorrecta'
            })
    } catch (error) {
        next(error)
    }
}