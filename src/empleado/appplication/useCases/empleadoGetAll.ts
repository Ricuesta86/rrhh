import { EmpleadoRepository } from '../../domain/repository/empleadoRepository';
import { Empleado } from '../../domain/entity/empleado';

export class EmpleadoGetAll {

  private readonly _empleadoRepository: EmpleadoRepository;

  constructor(empleadoRepository: EmpleadoRepository) {
    this._empleadoRepository = empleadoRepository;
  }

  async run():Promise<Empleado[]>  {
    return await this._empleadoRepository.getAll()
  }
}