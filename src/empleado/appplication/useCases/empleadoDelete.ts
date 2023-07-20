import { EmpleadoNotFoundById } from "../../domain/exception";
import { EmpleadoRepository } from "../../domain/repository/empleadoRepository";
import { ExistEmpleadoById } from "../../domain/service/existEmpleadoById";

export class EmpleadoDelete{

    private readonly _empleadoRepository;
    private readonly _existEmpleadoById;

    constructor(empleadoRepository: EmpleadoRepository) {
        this._empleadoRepository=empleadoRepository;
        this._existEmpleadoById = new ExistEmpleadoById(empleadoRepository)
    }

    async run(id:string):Promise<void>{

        const empleadoById:boolean = await this._existEmpleadoById.run(id)

        if(!empleadoById) throw new EmpleadoNotFoundById(id)

        await this._empleadoRepository.delete(id)
    }
}