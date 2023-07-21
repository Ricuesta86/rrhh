import { ExistEmpleadoById } from "../../domain/service";
import { Empleado } from "../../domain/entity/empleado";
import { EmpleadoRepository } from "../../domain/repository/empleadoRepository";
import { EmpleadoNotFoundById } from "../../domain/exception";

export class EmpleadoUpdate{

    private readonly _existEmpleadoById:ExistEmpleadoById
    constructor(private readonly empleadoRepository:EmpleadoRepository) {
        this._existEmpleadoById = new ExistEmpleadoById(empleadoRepository)
    }

    async run(id:string, empleado:Empleado):Promise<void>{

        const empleadoById:boolean = await this._existEmpleadoById.run(id)
        if(!empleadoById) throw new EmpleadoNotFoundById(id)

        return await this.empleadoRepository.update(id,empleado)
    }

}