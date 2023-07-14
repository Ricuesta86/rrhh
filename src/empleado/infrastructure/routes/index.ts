import {Router, Request, Response} from 'express';
import { createEmpleadoController, deleteEmpleadoController, getAllEmpleadoController } from '../controllers';



const router = Router();

router.get('/',getAllEmpleadoController)
router.post("/", createEmpleadoController);
router.delete("/:id", deleteEmpleadoController);


export {router as empleadoRouter}