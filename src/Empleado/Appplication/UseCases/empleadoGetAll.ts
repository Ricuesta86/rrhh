import { EmpleadoRepository } from '../../Domain/Repository/empleadoRepository';
import { Empleado } from '../../Domain/Entity/empleado';

export class EmpleadoGetAll {

  private readonly _empleadoRepository: EmpleadoRepository;

  constructor(empleadoRepository: EmpleadoRepository) {
    this._empleadoRepository = empleadoRepository;
  }

  async run():Promise<Empleado[]>  {
    return await this._empleadoRepository.getAll()
  }
}