import { NextFunction, Request, Response } from "express";
import { JWTAdapterToken } from '../implementation/jwt/jwtAdapterToken';

export const checkJwt =async (req:Request,res:Response, next:NextFunction) => {
    try {
        const jwtByUser =req.headers.authorization
        const jwt = jwtByUser?.split(' ').pop()
        const isCorrect = new JWTAdapterToken().verified(`${jwt}`)
        if(isCorrect){
            console.log({jwt})
            next()
        }else{
            res.status(400).json({msg:'Seccion no validad'})
        }
    } catch (error) {
        res.status(400).json({msg:'Seccion no validad'})
    }
}