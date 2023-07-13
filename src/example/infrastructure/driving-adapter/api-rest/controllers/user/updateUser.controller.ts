import { NextFunction, Request, Response } from "express";
import { InJsonUserRepository } from '../../../../implementation/InJSON/InJsonUserRepository';
import { UserUpdaterUseCase } from '../../../../../application/use-cases/UserUpdater/index';
import { User } from "../../../../../dominio/entity/User";



export const updateUser =async (req:Request, res:Response, next:NextFunction) => {
    const {id,username,email, password} = req.body;
    const inJsonUserRepository = new InJsonUserRepository()
    const userUpdaterUseCase = new UserUpdaterUseCase(inJsonUserRepository);

    const userToUpdated: User = {
        id,
        username,
        email,
        password,
    }

    try {
        const userUpdated = await userUpdaterUseCase.run(userToUpdated);
        res.json(userUpdated);
    } catch (error) {
        next(error)
    }

}