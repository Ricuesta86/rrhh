import { NextFunction, Request, Response } from "express"
import { InJsonEmpleadoRepository } from '../implementation/inJSON/inJsonEmpleadoRepository';
import { EmpleadoUpdateUseCase } from "../../appplication/useCases";

export const updateEmpleado = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const {id} = req.params
    const {empleado}=req.body


  const inJsonEmpleadoRepository = new InJsonEmpleadoRepository();
  const empleadoUpdateUseCase = new EmpleadoUpdateUseCase(inJsonEmpleadoRepository)

  try {
    await empleadoUpdateUseCase.run(id,empleado)
    res.json({ msg: `Update empleado ${id}` });
  } catch (error) {
    next(error);
  }
};