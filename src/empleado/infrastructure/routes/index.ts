import {Router, Request, Response} from 'express';
import { createEmpleadoController, deleteEmpleadoController, getAllEmpleadoController,updateEmpleadoController,getEmpleadoController } from '../controllers';



const router = Router();

router.get('/',getAllEmpleadoController)
router.get("/:id", getEmpleadoController);
router.post("/", createEmpleadoController);
router.delete("/:id", deleteEmpleadoController);
router.put("/:id", updateEmpleadoController);


export {router as empleadoRouter}