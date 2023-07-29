import { NextFunction, Request, Response } from "express";
import { Auth } from '../../domain/entity/auth';
import { InJsonAdapterAuthRepository } from "../implementation/inJSON/inJsonAdapterAuthRepository";
import { AuthLoginUseCase } from "../../application/useCase";
import { AuthValueObject } from "../../domain/valueObject/authValueObject";
import { BcryptAdapterEncrypt } from '../implementation/bcrypt/bcryptAdapterEncrypt';

export const login = async (req:Request, res:Response, next:NextFunction)=>{

    const {auth}=req.body;


    const inJsonAdapterAuthRepository=new InJsonAdapterAuthRepository()
    const authLoginUseCase= new  AuthLoginUseCase(inJsonAdapterAuthRepository);
    const bcryptAdapterEncrypt = new BcryptAdapterEncrypt()
    



    try {
        const authLogin = await authLoginUseCase.run(auth)
        const passHash =authLogin.password
        const isCorrect = await bcryptAdapterEncrypt.verified(auth.password,passHash)
        if(isCorrect)
        res.status(201).json({msg:'El user fue logeado correctamente',data: auth
        })
        else
        res.status(400).json({
            msg:'Contraceña incorrecta'
        })
    } catch (error) {
        next(error)
    }
}