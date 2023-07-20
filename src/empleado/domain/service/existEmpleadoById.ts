import { Empleado } from '../entity/empleado';
import { EmpleadoRepository } from '../repository/empleadoRepository';
export class ExistEmpleadoById{
    
    constructor(private readonly empleadoRepository : EmpleadoRepository) {
    }

    async run(id: string):Promise<boolean>{

        const empleadoById = await this.empleadoRepository.getById(id)

        return empleadoById !== null
    }
}