export class EmpleadoNotFound extends Error{
    constructor() {
        super('Empleado not found')
    }
}