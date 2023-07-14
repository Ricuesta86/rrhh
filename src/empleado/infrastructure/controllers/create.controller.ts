import { NextFunction, Request, Response } from "express";
import { InJsonEmpleadoRepository } from '../implementation/inJSON/inJsonEmpleadoRepository';
import { EmpleadoCreatorUseCase } from '../../appplication/useCases';
import { Empleado } from "empleado/domain/entity/empleado";
import { v4 as uuidv4 } from 'uuid';
import { EmpleadoValueObject } from "../../domain/valueObject/empleadoValueObject";

export const create = async (req:Request, res:Response, next:NextFunction)=>{

    const {body}=req;


    const inJsonEmpleadoRepository=new InJsonEmpleadoRepository()
    const empleadoCreatorUseCase= new  EmpleadoCreatorUseCase(inJsonEmpleadoRepository);

    const newEmpleado: Empleado = new EmpleadoValueObject(
        uuidv4(),
        body.nombre,
        body.apellidos,
        body.ci,
        body.edad
    );

    try {
        const createdEmpleado = await empleadoCreatorUseCase.run(newEmpleado)
        res.json(createdEmpleado)
    } catch (error) {
        next(error)
    }
}