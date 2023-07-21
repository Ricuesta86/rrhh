export class EmpleadoNotFoundById extends Error{
    constructor(msg: string) {
        super(`El empleado con el id: ${msg} no existe`)
    }
}