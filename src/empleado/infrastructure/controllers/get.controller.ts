import { NextFunction, Request, Response } from "express";
import { InJsonEmpleadoRepository } from '../implementation/inJSON/inJsonEmpleadoRepository';
import {EmpleadoGetterUseCase} from '../../appplication/useCases'

export const get= async (req:Request,res:Response,next:NextFunction)=>{

    const {id}=req.params

    const inJsonEmpleadoRepository = new InJsonEmpleadoRepository()
    const empleadoGetterUseCase = new EmpleadoGetterUseCase(inJsonEmpleadoRepository)

    try {
        const getEmpleado = await empleadoGetterUseCase.run(id)
        res.json(getEmpleado)
    } catch (error) {
        next(error)
    }
}