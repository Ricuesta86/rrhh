import { config as dotEnvConfig } from 'dotenv'
import express, { type Request, type Response } from 'express'
import cors from 'cors'
import { empleadoRouter } from './empleado/infrastructure/routes'
import { authRouter } from './auth/infrastructure/routes'

dotEnvConfig()

function boostrap (): void {
  const PORT = process.env.PORT || 3000

  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())

  // app.use('/', (req: Request, res: Response) => {
  //   res.json({ msg: 'Holis' })
  // })

  app.use('/empleado',empleadoRouter)
  app.use('/auth',authRouter)

  app.listen(PORT, () => {
    console.log(`[App] corriendo por el puerto ${PORT}`)
  })
}

boostrap()
