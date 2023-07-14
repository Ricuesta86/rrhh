import {Router, Request, Response} from 'express';



const router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.json({msg:"Holis,  lista de empleados"})
})

export {router as empleadoRouter}