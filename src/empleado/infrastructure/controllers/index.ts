import { getAll } from "./getAll.controller";
import { create } from './create.controller';
import { deleteEmpleado } from "./delete.controller";
import { updateEmpleado } from './update.controller';
import {get} from './get.controller'


export {
  getAll as getAllEmpleadoController,
  create as createEmpleadoController,
  deleteEmpleado as deleteEmpleadoController,
  updateEmpleado as updateEmpleadoController,
  get as getEmpleadoController
};