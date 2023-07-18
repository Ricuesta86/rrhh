import { Empleado } from '../entity/empleado';
export interface EmpleadoRepository {
  getAll: () => Promise<Empleado[]>;
  save: (empleado: Empleado) => Promise<Empleado>;
  getByCI: (ci: string) => Promise<Empleado | null>;
  update: (id:string, empleado: Empleado) => Promise<Empleado>;
  delete: (id: string) => Promise<void>;
  getById: (id: string) => Promise<Empleado | null>;
}
