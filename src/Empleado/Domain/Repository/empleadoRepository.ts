import { Empleado } from '../Entity/empleado';
export interface EmpleadoRepository {
  getAll: () => Promise<Empleado[]>;
  save: (empleado: Empleado) => Promise<Empleado>;
  getByCI: (ci: string) => Promise<Empleado | null>;
  update: (empleado: Empleado) => Promise<Empleado>;
  delete: (empleado: Empleado) => Promise<void>;
  getById: (id: string) => Promise<Empleado | null>;
}
