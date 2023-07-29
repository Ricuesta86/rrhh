import { NextFunction, Request, Response } from "express";
import { Auth } from '../../domain/entity/auth';
import { InJsonAdapterAuthRepository } from "../implementation/inJSON/inJsonAdapterAuthRepository";
import { AuthRegisterUseCase } from "../../application/useCase";
import { AuthValueObject } from "../../domain/valueObject/authValueObject";
import { BcryptAdapterEncrypt } from '../implementation/bcrypt/bcryptAdapterEncrypt';

export const register = async (req:Request, res:Response, next:NextFunction)=>{

    const {auth}=req.body;


    const inJsonAdapterAuthRepository=new InJsonAdapterAuthRepository()
    const authRegisterUseCase= new  AuthRegisterUseCase(inJsonAdapterAuthRepository);
    const bcryptAdapterEncrypt = new BcryptAdapterEncrypt()
    const password = await bcryptAdapterEncrypt.encrypt(auth.password)

    const newUser: Auth = new AuthValueObject(
        auth.email,
        password
    );

    try {
        const registerUser = await authRegisterUseCase.run(newUser)
        res.status(201).json({msg:'El user fue registrado correctamente',data: registerUser
        })
    } catch (error) {
        next(error)
    }
}