import {Router, Request, Response, NextFunction} from 'express';
import { createEmpleadoController, deleteEmpleadoController, getAllEmpleadoController,updateEmpleadoController,getEmpleadoController } from '../controllers';
import { EmpleadoAlreadyExist, EmpleadoNotFound } from '../../domain/exception';



const router = Router();

router.get('/',getAllEmpleadoController)
router.get("/:id", getEmpleadoController);
router.post("/", createEmpleadoController);
router.delete("/:id", deleteEmpleadoController);
router.put("/:id", updateEmpleadoController);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof EmpleadoAlreadyExist) {
      res.status(400).json({
        message: 'El empleado ya ha sido creado'
      })
    } else if (err instanceof EmpleadoNotFound) {
      res.status(400).json({
        message: 'El empleado no existe'
      })
    } else {
      next(err)
    }
})

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500)
    res.json({
        error: err
    })
})

export {router as empleadoRouter}