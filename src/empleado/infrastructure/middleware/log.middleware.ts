import { NextFunction, Request, Response } from "express";

export const logMiddleware=async (req:Request,res:Response, next:NextFunction) => {
    console.log('holis')
    next()
}