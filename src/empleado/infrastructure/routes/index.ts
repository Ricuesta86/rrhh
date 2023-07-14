import {Router, Request, Response} from 'express';
import { getAllEmpleadoController } from '../controllers';



const router = Router();

router.get('/',getAllEmpleadoController)

export {router as empleadoRouter}