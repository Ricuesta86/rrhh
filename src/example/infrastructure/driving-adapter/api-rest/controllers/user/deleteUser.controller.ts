import { NextFunction, Request, Response } from "express";
import { InJsonUserRepository } from '../../../../implementation/InJSON/InJsonUserRepository';
import { UserDeleterUseCase } from '../../../../../application/use-cases/UserDeleter/index';


export const deleteUser = async (req:Request, res:Response, next:NextFunction):Promise <void>=>{
    const id =req.params.id

    console.log(id);
    const inJsonUserRepository = new InJsonUserRepository();
    const userDeleterUseCase = new UserDeleterUseCase(inJsonUserRepository);

    try {
        await userDeleterUseCase.run(id)        
    } catch (error) {
        next(error)
    }
}