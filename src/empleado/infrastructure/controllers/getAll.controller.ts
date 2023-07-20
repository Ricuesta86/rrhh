import { InJsonEmpleadoRepository } from '../implementation/inJSON/inJsonEmpleadoRepository';
import { EmpleadoGetAllUseCase } from '../../appplication/useCases';
import { Empleado } from 'empleado/domain/entity/empleado';
import { NextFunction, Request, Response } from 'express';

export const getAll = async (req: Request, res: Response, next:NextFunction) => {
    const inJsonEmpleadoRepository = new InJsonEmpleadoRepository()
    const empleadoGetAllUseCase = new EmpleadoGetAllUseCase(
      inJsonEmpleadoRepository
    );

    try {        
      const data:Empleado[] = await empleadoGetAllUseCase.run()
      res.status(200).json({msg:'SUCCESS', data})
    } catch (error) {
        next(error)
    }
};