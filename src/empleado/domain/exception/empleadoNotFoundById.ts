export class EmpleadoNotFoundById extends Error{
    constructor(msg: string) {
        super(`Empleado not found by id: ${msg}`)
    }
}