import {Router, Request, Response, NextFunction} from 'express';
import { createEmpleadoController, deleteEmpleadoController, getAllEmpleadoController,updateEmpleadoController,getEmpleadoController } from '../controllers';
import { EmpleadoAlreadyExist, EmpleadoNotFound, EmpleadoNotFoundById } from '../../domain/exception';
import { logMiddleware } from '../middleware/log.middleware';



const router = Router();

router.get('/', logMiddleware, getAllEmpleadoController)
router.get("/:id", getEmpleadoController);
router.post("/", createEmpleadoController);
router.delete("/:id", deleteEmpleadoController);
router.put("/:id", updateEmpleadoController);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof EmpleadoAlreadyExist) {
      res.status(400).json({
        msg: 'El empleado ya ha sido creado'
      })
    } else if (err instanceof EmpleadoNotFound) {
        res.status(404).json({
          msg: 'El empleado no existe'
        })
    } else if (err instanceof EmpleadoNotFoundById) {        
        res.status(404).json({
            msg: err.message
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