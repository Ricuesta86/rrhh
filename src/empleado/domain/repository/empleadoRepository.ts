import { Empleado } from '../entity/empleado';
export interface EmpleadoRepository {
  getAll: () => Promise<Empleado[]>;
  get: (id:string) => Promise<Empleado | undefined>;
  save: (empleado: Empleado) => Promise<Empleado>;
  getByCI: (ci: string) => Promise<Empleado | undefined>;
  update: (id:string, empleado: Empleado) => Promise<void>;
  delete: (id: string) => Promise<void>;
  getById: (id: string) => Promise<Empleado | undefined>;
}
