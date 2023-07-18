import { Empleado } from '../../../domain/entity/empleado';
import { EmpleadoRepository } from "../../../domain/repository/empleadoRepository";
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

  async update (id: string, empleado: Empleado):Promise<Empleado>{
    return await empleado
  }

  async delete(id:string): Promise<void>{
     
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
    let empleados={empleados:this.empleadoData}
    let JsonDataString=JSON.stringify(empleados)
    fs.writeFileSync(
      "./src/empleado/infrastructure/implementation/inJSON/data.json",
      JsonDataString
    );
  }
}
