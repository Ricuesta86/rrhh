import { NextFunction, Request, Response } from "express";
import { InJsonEmpleadoRepository } from '../implementation/inJSON/inJsonEmpleadoRepository';
import { EmpleadoCreatorUseCase } from '../../appplication/useCases';
import { Empleado } from "empleado/domain/entity/empleado";
import { v4 as uuidv4 } from 'uuid';
import { EmpleadoValueObject } from "../../domain/valueObject/empleadoValueObject";

export const create = async (req:Request, res:Response, next:NextFunction)=>{

    const {empleado}=req.body;


    const inJsonEmpleadoRepository=new InJsonEmpleadoRepository()
    const empleadoCreatorUseCase= new  EmpleadoCreatorUseCase(inJsonEmpleadoRepository);

    const newEmpleado: Empleado = new EmpleadoValueObject(
        uuidv4(),
        empleado.nombre,
        empleado.apellidos,
        empleado.ci,
        empleado.edad
    );

    try {
        const createdEmpleado = await empleadoCreatorUseCase.run(newEmpleado)
        res.status(201).json({msg:'El empleado fue creado correctamente',data: createdEmpleado
        })
    } catch (error) {
        next(error)
    }
}