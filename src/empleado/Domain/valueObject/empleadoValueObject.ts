import { Empleado } from "../entity/empleado";

export class EmpleadoValueObject implements Empleado{
    id: string;
    nombre: string;
    apellidos: string;
    ci: string;
    edad: number;

    constructor(id: string, nombre: string, apellidos: string, ci: string,edad: number) {
        this.id=id
        this.nombre=nombre
        this.apellidos=apellidos
        this.ci=ci
        this.edad=edad
    }
}