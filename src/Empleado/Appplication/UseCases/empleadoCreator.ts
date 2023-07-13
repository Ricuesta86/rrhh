import { Empleado } from "../../Domain/Entity/empleado";
import { EmpleadoRepository } from "../../Domain/Repository/empleadoRepository";

export class EmpleadoCreator{

    private readonly _empleadoRepository:EmpleadoRepository;

    constructor(empleadoRepository:EmpleadoRepository){
        this._empleadoRepository=empleadoRepository;
    }

    async run(empleado:Empleado):Promise<Empleado>{
        return await this._empleadoRepository.save(empleado)
    }
}