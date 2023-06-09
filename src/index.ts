import { config as dotEnvConfig} from "dotenv"
import express, { Request, Response } from "express";
import cors from "cors";

dotEnvConfig();

function boostrap(){
    
    const PORT = process.env.Port || 3000;
    
    const app = express();

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(cors())

    app.use('/',(req:Request, res:Response)=>{
        res.json({msg:"Holis"})
    })

    app.listen(PORT,()=>{
        console.log(`[App] corriendo por el puerto ${PORT}`)
    })

}

boostrap();