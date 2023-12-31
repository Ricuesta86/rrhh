import path from 'path'
import * as dotenv from 'dotenv'
import { BackendApp } from './BackendApp'

try {
  dotenv.config(
    { path: path.resolve(__dirname, '../../../../env') }
  )

  new BackendApp().start()
} catch (error) {
  console.log(error)
}
