import { NextFunction, Request, Response } from "express"
import { InJsonEmpleadoRepository } from '../implementation/inJSON/inJsonEmpleadoRepository';
import { EmpleadoDeleteUseCase } from "../../appplication/useCases";

export const deleteEmpleado = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const {id} = req.params


  const inJsonEmpleadoRepository = new InJsonEmpleadoRepository();
  const empleadoDeleteUseCase = new EmpleadoDeleteUseCase(inJsonEmpleadoRepository)

  try {
    await empleadoDeleteUseCase.run(id)
    res.json({ msg: `Delete empleado ${id}` });
  } catch (error) {
    next(error);
  }
};