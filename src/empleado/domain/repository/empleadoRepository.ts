import { Empleado } from '../entity/empleado';
export interface EmpleadoRepository {
  getAll: () => Promise<Empleado[]>;
  get: (id:string) => Promise<Empleado | null>;
  save: (empleado: Empleado) => Promise<Empleado>;
  getByCI: (ci: string) => Promise<Empleado | null>;
  update: (id:string, empleado: Empleado) => Promise<void>;
  delete: (id: string) => Promise<void>;
  getById: (id: string) => Promise<Empleado | null>;
}
