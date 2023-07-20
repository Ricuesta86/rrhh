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
    res.status(200).json({ msg: `El empleado fue eliminado correctamente` });
  } catch (error) {
    next(error);
  }
};