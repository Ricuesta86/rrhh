import { NextFunction, Request, Response } from "express"
import { InJsonEmpleadoRepository } from '../implementation/inJSON/inJsonEmpleadoRepository';

export const deleteEmpleado = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const {id} = req.params


  const inJsonEmpleadoRepository = new InJsonEmpleadoRepository();
  // const DeleteEmpleadoUseCase = new Delet

  try {
    res.json({ msg: `Delete empleado ${id}` });
  } catch (error) {
    next(error);
  }
};