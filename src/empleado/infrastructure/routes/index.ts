import {Router, Request, Response} from 'express';
import { createEmpleadoController, getAllEmpleadoController } from '../controllers';



const router = Router();

router.get('/',getAllEmpleadoController)
router.post("/", createEmpleadoController);


export {router as empleadoRouter}