import { Empleado } from "../../domain/entity/empleado";
import { EmpleadoRepository } from "../../domain/repository/empleadoRepository";

export class EmpleadoUpdate{
    constructor(private readonly empleadoRepository:EmpleadoRepository) {
    }

    async run(id:string, empleado:Empleado):Promise<void>{
        return await this.empleadoRepository.update(id,empleado)
    }

}