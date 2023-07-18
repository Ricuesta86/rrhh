import { EmpleadoRepository } from "empleado/domain/repository/empleadoRepository";

export class EmpleadoDeleteUseCase{
    private readonly _empleadoRepository;
    constructor(empleadoRepository: EmpleadoRepository) {
        this._empleadoRepository=empleadoRepository;
    }

    async run(id:string):Promise<void>{
        await this._empleadoRepository.delete(id)
    }
}