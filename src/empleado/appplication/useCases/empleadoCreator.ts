import { ExistEmpleadoByCI } from "../../domain/service/existEmpleadoByCI";
import { Empleado } from "../../domain/entity/empleado";
import { EmpleadoRepository } from "../../domain/repository/empleadoRepository";
import { EmpleadoAlreadyExist } from "../../domain/exception";

export class EmpleadoCreator{

    private readonly _empleadoRepository:EmpleadoRepository;
    private readonly _existEmpleadoByCI:ExistEmpleadoByCI

    constructor(empleadoRepository:EmpleadoRepository){
        this._empleadoRepository=empleadoRepository;
        this._existEmpleadoByCI= new ExistEmpleadoByCI(empleadoRepository)
    }

    async run(empleado:Empleado):Promise<Empleado>{

        const existEmpleado:boolean = await this._existEmpleadoByCI.run(empleado.ci)

        console.log(existEmpleado)
        if(existEmpleado) throw new EmpleadoAlreadyExist()
        
        return await this._empleadoRepository.save(empleado)
    }
}