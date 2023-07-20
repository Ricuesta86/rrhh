import { Empleado } from "../../domain/entity/empleado";
import { EmpleadoNotFound } from "../../domain/exception";
import { EmpleadoRepository } from "empleado/domain/repository/empleadoRepository";

export class EmpleadoGetter{
    constructor(private readonly empleadoRepository:EmpleadoRepository) {       
    }

    async run(id:string):Promise<Empleado>{

        const getter = await this.empleadoRepository.get(id);

        if(!getter) throw new  EmpleadoNotFound()

        return getter
    } 
}