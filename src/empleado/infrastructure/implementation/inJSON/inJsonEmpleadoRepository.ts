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
    const empleadoByCI =await this.empleadoData.find(emp=>emp.ci===ci)
    return !empleadoByCI ? null : empleadoByCI
  }

  async update (id: string, empleado: Empleado):Promise<void>{
    const empleados = await this.empleadoData.map(emp=>emp.id === id?{...empleado,id}:emp)
    this.empleadoData = empleados
    this.saveJSON()
  }

  async delete(id:string): Promise<void>{
     const empleados = await this.empleadoData.filter(emp =>emp.id !==id )
     this.empleadoData = empleados
     this.saveJSON()
  }


  async getById(id: string):Promise<Empleado | undefined>{
    return await this.empleadoData.find(emp=>emp.id===id)
  }

  async get(id: string):Promise<Empleado | undefined>{
    return await this.empleadoData.find(emp=>emp.id===id)
  }

  async getAll (): Promise<Empleado[]> {
    return await this.empleadoData
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
