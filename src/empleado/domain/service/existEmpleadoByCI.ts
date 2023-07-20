import { Empleado } from "../entity/empleado";
import { EmpleadoRepository } from "../repository/empleadoRepository";

export class ExistEmpleadoByCI{

    constructor(private readonly empleadoRepository:EmpleadoRepository) {
    }

    async run(ci:string):Promise<boolean>{

        const empleado = await this.empleadoRepository.getByCI(ci)
        
        return empleado !== null
    }
}