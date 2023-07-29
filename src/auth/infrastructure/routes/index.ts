import {Router, Request, Response, NextFunction} from 'express';
import { registerAuthController } from '../controllers';



const router = Router();

router.post("/register", registerAuthController);
router.post("/", registerAuthController);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // if (err instanceof EmpleadoAlreadyExist) {
    //   res.status(400).json({
    //     msg: 'El empleado ya ha sido creado'
    //   })
    // } else if (err instanceof EmpleadoNotFound) {
    //     res.status(404).json({
    //       msg: 'El empleado no existe'
    //     })
    // } else if (err instanceof EmpleadoNotFoundById) {        
    //     res.status(404).json({
    //         msg: err.message
    //     })
    // } else {
    //     next(err)
    // }
    next()
})

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500)
    res.json({
        error: err
    })
})

export {router as authRouter}