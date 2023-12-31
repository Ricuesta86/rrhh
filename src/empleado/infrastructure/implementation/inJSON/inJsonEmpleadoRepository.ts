import { Empleado } from '../../../domain/entity/empleado';
import { EmpleadoRepository } from "../../../domain/repository/empleadoRepository";
import * as fs from 'fs';

export class InJsonEmpleadoRepository implements EmpleadoRepository {
  
  private empleadoData: Empleado[]
  private url_dir: string
  private dataJSON:object
  
  constructor(){
    this.url_dir = process.env.URL_DIR || '/home/ricuesta/Dev/repo-rhu/backend/src/empleado/infrastructure/implementation/inJSON/data.json'
    const data =require(this.url_dir)
    this.dataJSON = data
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


  async getById(id: string):Promise<Empleado | null>{
    const empleadoById =await this.empleadoData.find(emp=>emp.id===id)
    return !empleadoById ? null : empleadoById
  }

  async get(id: string):Promise<Empleado | null>{
    const empleadoById =await this.empleadoData.find(emp=>emp.id===id)
    return !empleadoById ? null : empleadoById
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
    let empleados={empleados:this.empleadoData,...this.dataJSON}
    let JsonDataString=JSON.stringify(empleados)
    fs.writeFileSync(
      this.url_dir,
      JsonDataString
    );
  }
}
