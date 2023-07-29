import { NextFunction, Request, Response } from "express";
import { JWTAdapterToken } from '../implementation/jwt/jwtAdapterToken';

interface RequestExt extends Request {
    user?:any
}

export const checkJwt =async (req:RequestExt,res:Response, next:NextFunction) => {
    try {
        const jwtByUser =req.headers.authorization
        const jwt = jwtByUser?.split(' ').pop()
        const isCorrect = new JWTAdapterToken().verified(`${jwt}`)
        if(isCorrect){
            req.user = isCorrect
            next()
        }else{
            res.status(401).json({msg:'No tiene jwt valido'})
        }
    } catch (error) {
        res.status(400).json({msg:'Seccion no validad'})
    }
}