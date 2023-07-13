import { Empleado } from '../../../Domain/Entity/empleado';
import { EmpleadoRepository } from "../../../Domain/Repository/empleadoRepository";
import data from './data.json'
import * as fs from 'fs';

export class InJsonEmpleadoRepository implements EmpleadoRepository {
  
  private empleadoData: Empleado[]

  constructor(){
    this.empleadoData=data.empleados
  }

  async getByCI(ci: string):Promise<Empleado | null>{
    return null
  }

  async update (empleado: Empleado):Promise<Empleado>{
    return await empleado
  }

  async delete(empleado: Empleado): Promise<void>{
     
  }


  async getById(id: string):Promise<Empleado | null>{
    return await null
  }


  async getAll (): Promise<Empleado[]> {
    return this.empleadoData
  }

  async save (empleado: Empleado): Promise<Empleado> {
    this.empleadoData.push(empleado)
    this.saveJSON()
    return empleado
  }

  

  saveJSON():void {
    let users={users:this.empleadoData}
    let JsonDataString=JSON.stringify(users)
    fs.writeFileSync(
      "./src/Empleado/Infrastructure/implementation/InJSON/data.json",
      JsonDataString
    );
  }
}
